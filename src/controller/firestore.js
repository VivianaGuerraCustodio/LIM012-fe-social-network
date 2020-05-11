/* eslint-disable no-unused-vars */


export const saveUser = (user) => {
  const db = firebase.firestore();
  db.collection('usuarios').doc(user.email).set({
    nameUser: user.displayName,
    photoURL: user.photoURL,
    emailUser: user.email,
  });
};

export const getUser = (user) => {
  // console.log(user);
  const db = firebase.firestore();
  db.collection('usuarios')
    .onSnapshot((doc) => {
      doc.forEach((usuarios) => {
        // console.log('Current data: ', usuarios.data());
      });
    });
};

export const savePost = (user, email, photo, date, datetime, content) => {
  const firestore = firebase.firestore();
  firestore.collection('posts').add({
    user,
    email,
    photo,
    date,
    datetime,
    content,
  });// .then((posts) => {
  // console.log('Document written with ID', posts.id);
  // }).catch((error) => {
  // console.error('Error adding document: ', error);
  // });
};

// export const deletePost = idPost => firebase.firestore()
// .collection('users').doc(idPost).delete();
