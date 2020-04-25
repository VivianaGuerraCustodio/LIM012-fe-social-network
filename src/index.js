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
const login = document.querySelector('.ingresar');
const buttonRegister = document.querySelector('.register');
const registerNewUser = document.querySelector('.newUser');
const registrar = document.querySelector('.nuevoUsuario');
const generalContainer = document.querySelector('.generalContainer');
const logOut = document.querySelector('.logOut');
generalContainer.style.display = 'none';

buttonRegister.addEventListener('click', () => {
  signIn.style.display = 'none';
  registerNewUser.style.display = 'block';
  generalContainer.style.display = 'none';
});
// funcion para iniciar sesión
login.addEventListener('click', () => {
  const emailLogIn = document.querySelector('.email').value;
  const contraseñaLogIn = document.querySelector('.password').value;
  firebase.auth().signInWithEmailAndPassword(emailLogIn, contraseñaLogIn).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password.');
    } else {
      alert(errorMessage);
    }
  });
});
// esta función nos recuerda los datos de un usuario activo,
// previamente logeado o registrado.
const observador = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
    // User is signed in.
      console.log('usuario activo');
      generalContainer.style.display = 'block';
      const displayName = user.displayName;
      console.log(displayName);
      const email = user.email;
      console.log(email);
      const emailVerified = user.emailVerified;
      console.log(emailVerified);
      const photoURL = user.photoURL;
      console.log(photoURL);
      const isAnonymous = user.isAnonymous;
      console.log(isAnonymous);
      const uid = user.uid;
      console.log(uid);
      const providerData = user.providerData;
      console.loge(providerData);
    // ...
    } else {
    // User is signed out.
      console.log('Has cerrado sesión correctamente');
    }
  });
};
observador();
// funcion para cerrar sesión.
logOut.addEventListener('click', () => {
  firebase.auth().signOut().then().catch();
});
// funcion para registrarse.
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
    generalContainer.style.display = 'none';
  });
});
