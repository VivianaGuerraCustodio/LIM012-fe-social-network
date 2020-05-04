
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
