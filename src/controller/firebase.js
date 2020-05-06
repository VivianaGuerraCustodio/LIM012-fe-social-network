/* eslint-disable max-len */
/* eslint-disable import/no-cycle */


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
