

export const saveUser = (user) => {
  const db = firebase.firestore();
  db.collection('usuarios').doc(user.email).set({
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
      doc.forEach((usuarios) => {
        console.log('Current data: ', usuarios.data());
      });
    });
};
