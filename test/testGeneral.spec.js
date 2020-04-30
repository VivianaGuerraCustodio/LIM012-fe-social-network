import {
  register,
  logIn,
  signInOff,
  googleAuth,
  facebookAuth,
} from '../src/controller/firebase.js';

describe('register', () => {
  it('debería ser una función', () => {
    expect(typeof register).toBe('function');
  });
});
describe('logIn', () => {
  it('debería ser una función', () => {
    expect(typeof logIn).toBe('function');
  });
});
describe('signInOff', () => {
  it('debería ser una función', () => {
    expect(typeof signInOff).toBe('function');
  });
});
describe('googleAuth', () => {
  it('debería ser una función', () => {
    expect(typeof googleAuth).toBe('function');
  });
});
describe('facebokkAuth', () => {
  it('debería ser una función', () => {
    expect(typeof facebookAuth).toBe('function');
  });
});
