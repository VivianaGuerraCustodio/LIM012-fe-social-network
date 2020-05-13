/* eslint-disable import/no-cycle */


import { changeView } from '../view-controler/router.js';
import { saveUser, getUser } from './firestore.js';
import { modelProfile } from '../templates/templateProfile.js';

// import home from '../view/home.js';

// eslint-disable-next-line max-len
export const register = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

// eslint-disable-next-line max-len
export const logIn = (emailLogin, passwordLogin) => firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
  .then(() => {
    if (logIn) {
      changeView('#/home');
    }
  });

export const currentUser = () => firebase.auth().currentUser;


export const signInOff = () => firebase.auth().signOut().then().catch();

export const googleAuth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(() => {
    saveUser(currentUser());
    if (googleAuth) {
      changeView('#/home');
      getUser();
      modelProfile();
    }
  }).catch();
  return provider;
};
