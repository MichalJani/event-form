import React from 'react';
import { mount } from 'enzyme';

import { EventForm } from './EventForm';

describe('EventForm', () => {
  const mockSetAlert = jest.fn();
  const mockAddEvent = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <EventForm addEvent={mockAddEvent} setAlert={mockSetAlert} />
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('Should render without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  it('Should have a First Name field', () => {
    expect(wrapper.find('input[name="firstName"]').length).toEqual(1);
  });

  it('Should have a Last Name field', () => {
    expect(wrapper.find('input[name="lastName"]').length).toEqual(1);
  });

  it('Should have an Email field', () => {
    expect(wrapper.find('input[name="email"]').length).toEqual(1);
  });

  it('Should have a Date field', () => {
    expect(wrapper.find('input[name="date"]').length).toEqual(1);
  });

  it('Should have a Submit button', () => {
    expect(wrapper.find('button[type="submit"]').length).toEqual(1);
  });

  it('Should call addEvent on submit button click', () => {
    wrapper.find('button[type="submit"]').simulate('click');
    expect(mockAddEvent).toHaveBeenCalled();
  });

  // Why doesn't it work???
  it('should set the password value on change event with trim', async () => {
    wrapper.find('input[name="firstName"]').simulate('change', {
      target: {
        value: 'somenewfirstName',
      },
    });

    console.log(wrapper.find('input[name="firstName"]').debug())
    expect(wrapper.find('input[name="firstName"]').prop('value')).toEqual(
      'somenewfirstName',
    )
  });
});
