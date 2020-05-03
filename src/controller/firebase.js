/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import { changeView } from '../view-controler/router.js';

// const firebase = require('firebase');
// Required for side-effects
// require('firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyAwXhQApvJ9tq-KWDkobxKX3eX02aJnTnY',
  authDomain: 'yachaywasiper.firebaseapp.com',
  // databaseURL: 'https://yachaywasiper.firebaseio.com',
  projectId: 'yachaywasiper',
  // storageBucket: 'yachaywasiper.appspot.com',
  messagingSenderId: '310386263852',
  appId: '1:310386263852:web:73a2899abadb931f214e89',
  measurementId: 'G-QTBC8WWL0Y',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// FIRESTORE
export const firestoreData = (name, email, photo) => {
  const db = firebase.firestore();
  db.collection('users').add({
    nameUser: name,
    photoURL: photo,
    emailUser: email,
  });
};
// esta función nos recuerda los datos de un usuario activo,
// previamente logeado o registrado.
export const observador = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      console.log('usuario activo');
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
      console.log(providerData);
      // ...
    } else {
      // User is signed out.
      console.log('Has cerrado sesión correctamente');
    }
  });
};
observador();
// este si essta..
// funcion para iniciar sesion
export const register = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
    alert('Registro exitoso, inicia sesión ');
  })
    .catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
    });
};
export const logIn = (emailLogin, passwordLogin) => {
  firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin).then(() => {
    if (logIn) {
      changeView('#/home');
    }
  })
    .catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
        changeView('#/login');
      }
    });
};

export const signInOff = () => {
  firebase.auth().signOut().then(() => {
    alert('Ha cerrado sesión correctamente 🤗');
    changeView('#/login');
  }).catch();
};

export const googleAuth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(() => {
    if (googleAuth) {
      changeView('#/home');
    }
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
    alert(`${errorMessage}`);
    changeView('#/login');
  });
};
export const facebookAuth = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    if (facebookAuth) {
      changeView('#/home');
    }

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
    alert(`${errorMessage}`);
    changeView('#/login');
  });
};
