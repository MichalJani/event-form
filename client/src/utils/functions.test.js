import { isEmailValid } from './functions';

describe('isEmailValid validation', () => {
  it('expect email@example.com to pass', () => {
    const input = 'email@example.com';

    expect(isEmailValid(input)).toBeTruthy();
  });

  it('expect emailexample.com to fail', () => {
    const input = 'emailexample.com';

    expect(isEmailValid(input)).toBeFalsy();
  });

  it('expect email@examplecom to fail', () => {
    const input = 'email@examplecom';

    expect(isEmailValid(input)).toBeFalsy();
  });

  it('expect @example.com to fail', () => {
    const input = '@example.com';

    expect(isEmailValid(input)).toBeFalsy();
  });
});
