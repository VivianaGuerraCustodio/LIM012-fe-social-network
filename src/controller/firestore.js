

export const saveUser = (user) => {
  const db = firebase.firestore();
  db.collection('usuarios').add({
    nameUser: user.name,
    photoURL: user.picture,
    emailUser: user.email,
  });
};

export const getUser = () => {
  const db = firebase.firestore();
  db.collection('usuarios')
    .onSnapshot((doc) => {
      doc.forEach((doc1) => {
        console.log('Current data: ', doc1.data());
      });
    });
};
