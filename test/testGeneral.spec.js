import {
  register,
  logIn,
  signInOff,
  googleAuth,
  facebookAuth,
} from '../src/controller/firebase.js';


// configurando firebase mock
const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth,
);

describe('Registro de nuevo usuario', () => {
  it('Deberia poder registrarse el nuevo usuario', () => register('prueba@gmail.com', '123456')
    .then((user) => {
      expect(user.email).toBe('prueba@gmail.com');
      expect(user.password).toBe('123456');
    }));
});

describe('Inicio de Sesión', () => {
  it('Deberia iniciar sesión', () => logIn('usuario@gmail.com', 'abc123')
    .then((user) => {
      expect(user.email).toBe('usuario@gmail.com');
      expect(user.password).toBe('abc123');
    }));
});

describe('Cerrar Sesión', () => {
  it('Deberia cerrar sesión', () => signInOff()
    .then((user) => {
      expect(user).toBe(undefined);
    }));
});

describe('Inicio de Sesión con Google', () => {
  it('Deberia iniciar sesión con Google', () => googleAuth()
    .then((user) => {
      expect(user.isAnonymous).toBe(false);
    }));
});

describe('Inicio de Sesión con Facebook', () => {
  it('Deberia iniciar sesión con Facebook', () => facebookAuth()
    .then((user) => {
      expect(user.isAnonymous).toBe(false);
    }));
});
