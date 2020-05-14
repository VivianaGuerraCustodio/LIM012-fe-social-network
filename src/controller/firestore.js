/* eslint-disable max-len */
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

export const savePost = (user, email, photo, date, datetime, content, postImg) => {
  const firestore = firebase.firestore();
  firestore.collection('posts').add({
    user,
    email,
    photo,
    date,
    datetime,
    content,
    postImg,
  });
};

// export const deletePost = idPost => firebase.firestore().collection('posts').doc(idPost).delete();
