import { isEmailValid, validateText, validateDate } from './functions';

describe('isEmailValid validation', () => {
  it('Should pass email@example.com', () => {
    const input = 'email@example.com';

    expect(isEmailValid(input)).toBeTruthy();
  });

  it('Should fail emailexample.com', () => {
    const input = 'emailexample.com';

    expect(isEmailValid(input)).toBeFalsy();
  });

  it('Should fail email@examplecom', () => {
    const input = 'email@examplecom';

    expect(isEmailValid(input)).toBeFalsy();
  });

  it('Should fail @example.com', () => {
    const input = '@example.com';

    expect(isEmailValid(input)).toBeFalsy();
  });
});

describe('validateText validation', () => {
  const name = 'firstName';

  it('Should pass text of length 1', () => {
    const value = 'm';
    const errors = validateText(name, value)

    expect(errors[name]).toBeFalsy();
  });

  it('Should fail text of length 0', () => {
    const value = '';
    const errors = validateText(name, value)

    expect(errors[name]).toBeTruthy();
  });

  it('Should fail text of length 41', () => {
    const value = 'fourtyonecharaceterslengthfourtyonecharac';
    const errors = validateText(name, value)

    expect(errors[name]).toBeTruthy();
  });
});

describe('validateDate validation', () => {
  it('Should pass a date format', () => {
    const date = new Date();
    const errors = validateDate(date);

    expect(errors.date).toBeFalsy();
  });

  it('Should fail non-date format', () => {
    const date = '2019/04/01';
    const errors = validateDate(date);

    expect(errors.date).toBeTruthy();
  });

  it('Should fail string format', () => {
    const date = 'date';
    const errors = validateDate(date);

    expect(errors.date).toBeTruthy();
  });
});
