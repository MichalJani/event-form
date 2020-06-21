import React from 'react';
import { shallow } from 'enzyme';
import { AlertBar } from './AlertBar';
import { testAlert } from '../../utils/testUtils';

describe('AlertBar', () => {
  it('Should render empty without crashing', () => {
    const props = {
      alerts: []
    };
    const wrapper = shallow(<AlertBar {...props} />);
    expect(wrapper).toBeTruthy();
  });

  it('Should render alerts without crashing', () => {
    const props = {
      alerts: [testAlert]
    };
    const wrapper = shallow(<AlertBar {...props} />);
    expect(wrapper).toBeTruthy();
  });
});
