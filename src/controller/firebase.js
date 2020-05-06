/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable import/no-cycle */


import { changeView } from '../view-controler/router.js';

const user = () => {
  firebase.auth().currentUser;
  let name; let email; let photoUrl; let uid; let
    emailVerified;
  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;
  }
};
// import profile from '../view/profile.js';

export const register = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

export const logIn = (emailLogin, passwordLogin) => firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
  .then(() => {
    if (logIn) {
      changeView('#/home');
    }
  });

export const signInOff = () => firebase.auth().signOut().then(() => {
  changeView('#/login');
}).catch();

export const googleAuth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(() => {
    const db = firebase.firestore();
    db.collection('usuarios').add({
      name: user.displayName,
      email: user.email,
      photoUrl: user.photoURL,
      // emailVerified : user.emailVerified,
      uid: user.uid,
    });
    if (googleAuth) {
      changeView('#/home');
    }
  }).catch();
  return provider;
};
