/* eslint-disable import/no-cycle */
import { currentUser } from './firebase.js';


export const saveUser = (user) => {
  const db = firebase.firestore();
  db.collection('usuarios').doc(user.uid).set({
    nameUser: user.displayName,
    photoURL: user.photoURL,
    emailUser: user.email,
  });
};

export const getUser = (user) => {
  console.log(user);
  const db = firebase.firestore();
  db.collection('usuarios')
    .onSnapshot((doc) => {
      doc.forEach((doc1) => {
        console.log('Current data: ', doc1.data());
      });
    });
};
