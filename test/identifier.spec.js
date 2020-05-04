import {
  register,
  logIn,
  signInOff,
  googleAuth,
  facebookAuth,
} from '../src/controller/firebase.js';


const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
);

describe('Inicio de sesion', () => {
  it('Debe iniciar sesión', () => {
    logIn('sabi@gmail.com', '123456').then((user) => {
      expect(user.email).toBe('sabi@gmail.com');
      expect(user.password).toBe('123456');
    });
  });
});

describe('Registro', () => {
  it('Debe crear usuario nuevo', () => {
    register('ejemplo@labo.com', '654321').then((user) => {
      expect(user.email).toBe('ejemplo@labo.com');
      expect(user.password).toBe('654321');
    });
  });
});

describe('Cierre de sesion', () => {
  it('Debe cerrar sesión', () => signInOff()
    .then((user) => {
      expect(user).toBe(undefined);
    }));
});

describe('Inicio-Google', () => {
  it('Debe iniciar sesión Google', () => googleAuth()
    .then((user) => {
      expect(user.isAnonymous).toBe(false);
    }));
});

describe('Inicio-Facebook', () => {
  it('Debe iniciar sesión Facebook', () => facebookAuth()
    .then((user) => {
      expect(user.isAnonymous).toBe(false);
    }));
});
