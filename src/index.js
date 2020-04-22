/* eslint-disable no-console */
/* eslint-disable no-alert */
/* import { example } from './example.js';

example(); */
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAwXhQApvJ9tq-KWDkobxKX3eX02aJnTnY',
  authDomain: 'yachaywasiper.firebaseapp.com',
  databaseURL: 'https://yachaywasiper.firebaseio.com',
  projectId: 'yachaywasiper',
  storageBucket: 'yachaywasiper.appspot.com',
  messagingSenderId: '310386263852',
  appId: '1:310386263852:web:73a2899abadb931f214e89',
  measurementId: 'G-QTBC8WWL0Y',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const signIn = document.querySelector('.logIn');
// const login = document.querySelector('.ingresar');
const buttonRegister = document.querySelector('.register');
const registerNewUser = document.querySelector('.newUser');
const registrar = document.querySelector('.nuevoUsuario');

buttonRegister.addEventListener('click', () => {
  signIn.style.display = 'none';
  registerNewUser.style.display = 'block';
});

registrar.addEventListener('click', (event) => {
  event.preventDefault();
  const email = document.querySelector('.newEmail').value;
  const password = document.querySelector('.newPassword').value;
  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode === 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    signIn.style.display = 'block';
    registerNewUser.style.display = 'none';
  });
});
