/* eslint-disable max-len */
/* eslint-disable import/no-cycle */

// esta función nos recuerda los datos de un usuario activo,
// previamente logeado o registrado.
// export const observador = () => {
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       // User is signed in.
//       console.log('usuario activo');
//       // const displayName = user.displayName;
//       // console.log(displayName);
//       // const email = user.email;
//       // console.log(email);
//       // const emailVerified = user.emailVerified;
//       // console.log(emailVerified);
//       // const photoURL = user.photoURL;
//       // console.log(photoURL);
//       // const isAnonymous = user.isAnonymous;
//       // console.log(isAnonymous);
//       // const uid = user.uid;
//       // console.log(uid);
//       // const providerData = user.providerData;
//       // console.log(providerData);
//     } else {
//       // User is signed out.
//       console.log('Has cerrado sesión correctamente');
//     }
//   });
// };
// observador();

import { changeView } from '../view-controler/router.js';

export const register = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

export const logIn = (emailLogin, passwordLogin) => firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
  .then(() => {
    if (logIn) {
      changeView('#/home');
    }
  });

export const signInOff = () => firebase.auth().signOut().then().catch();

export const googleAuth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(() => {
    if (googleAuth) {
      changeView('#/home');
    }
  }).catch();
  return provider;
};
