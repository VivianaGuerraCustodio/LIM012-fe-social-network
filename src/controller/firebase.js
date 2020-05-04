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
      // const displayName = user.displayName;
      // console.log(displayName);
      // const email = user.email;
      // console.log(email);
      // const emailVerified = user.emailVerified;
      // console.log(emailVerified);
      // const photoURL = user.photoURL;
      // console.log(photoURL);
      // const isAnonymous = user.isAnonymous;
      // console.log(isAnonymous);
      // const uid = user.uid;
      // console.log(uid);
      // const providerData = user.providerData;
      // console.log(providerData);
    } else {
      // User is signed out.
      console.log('Has cerrado sesión correctamente');
    }
  });
};
observador();
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
        changeView('#/home');
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
  firebase.auth().signInWithPopup(provider).then((result) => {
    if (googleAuth) {
      changeView('#/home');
    }
    const user = result.user;
    const db = firebase.firestore();
    db.collection('users').add({
      nameUser: user.displayName,
      photoURL: user.photoURL,
    });
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
    FB.login((response) => {
      if (response.status === 'connected') {
        // Logged into your webpage and Facebook.
      } else {
        // The person is not logged into your webpage or we are unable to tell.
      }
    }, { scope: 'public_profile,email' });
    if (facebookAuth) {
      changeView('#/profile');
    }
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    const db = firebase.firestore();
    db.collection('users').add({
      nameUser: user.displayName,
      photoURL: user.photoURL,
    });
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
