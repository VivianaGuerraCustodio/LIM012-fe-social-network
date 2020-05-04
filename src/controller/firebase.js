/* const firebaseConfig = {
  apiKey: 'AIzaSyAwXhQApvJ9tq-KWDkobxKX3eX02aJnTnY',
  authDomain: 'yachaywasiper.firebaseapp.com',
  databaseURL: 'https://yachaywasiper.firebaseio.com',
  projectId: 'yachaywasiper',
  storageBucket: 'yachaywasiper.appspot.com',
  messagingSenderId: '310386263852',
  appId: '1:310386263852:web:73a2899abadb931f214e89',
  measurementId: 'G-QTBC8WWL0Y',
}; */
// Initialize Firebase
/* firebase.initializeApp(firebaseConfig);
firebase.analytics(); */
// esta función nos recuerda los datos de un usuario activo,
// previamente logeado o registrado.
/* const observador = () => {
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
observador(); */


// eslint-disable-next-line max-len
export const register = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

// eslint-disable-next-line max-len
export const logIn = (emailLogin, passwordLogin) => firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin);


export const signInOff = () => firebase.auth().signOut().then().catch();

export const googleAuth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
export const facebookAuth = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
/* google */
/* .then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  const token = result.credential.accessToken;
  // The signed-in user info.
  const user = result.user;
  // ...
}) */
/* facebook */
/* .then((result) => {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  const token = result.credential.accessToken;
  // The signed-in user info.
  const user = result.user;
  // ...
}) */
/* google error */
/* .catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  const credential = error.credential;
  // ...
}); */


/* const db = firebase.firestore();
    db.collection('users').add({
      nameUser: user.displayName,
      photoURL: user.photoURL,
    });
*/
/* const db = firebase.firestore();
    db.collection('users').add({
      nameUser: user.displayName,
      photoURL: user.photoURL,
    });
const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    if (googleAuth) {
      changeView('#/profile');
    }
    const user = result.user;
    const db = firebase.firestore();
    db.collection('users').add({
      nameUser: user.displayName,
      photoURL: user.photoURL,
    });
const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    if (googleAuth) {
      changeView('#/profile');
    }
    const user = result.user;
    const db = firebase.firestore();
    db.collection('users').add({
      nameUser: user.displayName,
      photoURL: user.photoURL,
    });
 */
