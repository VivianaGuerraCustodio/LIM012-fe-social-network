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
// esta función nos recuerda los datos de un usuario activo,
// previamente logeado o registrado.
const observador = () => {
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
  firebase.auth().createUserWithEmailAndPassword(email, password)
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
  firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
    .catch((error) => {
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
};

export const singInOff = () => {
  firebase.auth().signOut().then().catch();
};
