import {
  register,
  logIn,
  signInOff,
  googleAuth,
  facebookAuth,
} from '../src/controller/firebase.js';

/* falta configuración firebase */

describe('Inicio de sesion', () => {
  it('Debe iniciar sesión', () => {
    logIn('usuario@gmail.com', '123456').then((user) => {
      expect().toBe('usuario@gmail.com');
      expect().toBe(false);
    });
  });
});

describe('Registro', () => {
  it('Debe crear usuario nuevo', () => {
    register('ejemplo@labo.com', '123456').then((user) => {
      expect().toBe('ejemplo@labo.com');
      expect().toBe(false);
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
      expect().toBe(false);
      expect().toEqual([{ 'google.com' }]);
    }));
});

describe('Inicio-Facebook', () => {
  it('Debe iniciar sesión Facebook', () => facebookAuth()
    .then((user) => {
      expect().toBe(false);
      expect().toEqual([{  'facebook.com' }]);
    }));
});