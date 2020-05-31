/* eslint-disable max-len */
/* eslint-disable import/no-cycle */


import { changeView } from '../view-controler/router.js';
import { saveUser, getUser } from './firestore.js';

export const currentUser = () => firebase.auth().currentUser;

export const register = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
  if (register) {
    saveUser((currentUser(email)));
  }
});

export const logIn = (emailLogin, passwordLogin) => firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
  .then(() => {
    if (logIn) {
      getUser(emailLogin);
      changeView('#/home');
    }
  });


export const signInOff = () => firebase.auth().signOut().then().catch();

export const googleAuth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(() => {
    saveUser(currentUser());
    if (googleAuth) {
      changeView('#/home');
    }
  }).catch();
  return provider;
};
