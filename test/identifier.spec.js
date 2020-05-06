
import {
  register,
  logIn,
  signInOff,
  googleAuth,
} from '../src/controller/firebase.js';


const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
);

describe('Registro de nuevo usuario', () => {
  it('Deberia poder registrarse el nuevo usuario', () => {
    register('ejemplo@labo.com', '654321').then((user) => {
      expect(user.email).toBe('ejemplo@labo.com');
      expect(user.password).toBe('654321');
    });
  });
});

describe('Inicio de sesion', () => {
  it('Deberia iniciar sesión', () => {
    logIn('prueba@gmail.com', '123456').then((user) => {
      expect(user.email).toBe('prueba@gmail.com');
      expect(user.password).toBe('123456');
    });
  });
});

describe('Cerrar Sesión', () => {
  it('Deberia cerrar sesión', () => signInOff()
    .then((user) => {
      expect(user).toBe(undefined);
    }));
});

describe('Inicio de Sesión con Google', () => {
  it('Deberia iniciar sesión Google', () => googleAuth()
    .then((user) => {
      expect(user.isAnonymous).toBe(false);
    }));
});

// describe('Inicio de Sesión con Facebook', () => {
//   it('Deberia iniciar sesión Facebook', () => facebookAuth()
//     .then((user) => {
//       expect(user.isAnonymous).toBe(false);
//     }));
// });
