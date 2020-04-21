/* eslint-disable no-console */
/* eslint-disable no-alert */


/* import { example } from './example.js';

example(); */
const signIn = document.querySelector('.logIn');
// const login = document.querySelector('.ingresar');
const buttonRegister = document.querySelector('.register');
const registerNewUser = document.querySelector('.newUser');
const registrar = document.querySelector('.nuevoUsuario');

buttonRegister.addEventListener('click', () => {
  signIn.style.display = 'none';
  registerNewUser.style.display = 'block';
});

registrar.addEventListener('click', () => {
  const email = document.querySelector('.newEmail').value;
  const password = document.querySelector('.newPassword').value;
  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
});
