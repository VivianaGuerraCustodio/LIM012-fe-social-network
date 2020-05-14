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
  return firestore.collection('posts').add({
    user,
    email,
    photo,
    date,
    datetime,
    content,
    likes: [],
  });
};
export const editPost = (id, content) => firebase.firestore().collection('posts').doc(id).update({ content });
export const deletePost = id => firebase.firestore().collection('posts').doc(id).delete();


export const saveComment = (postId, comment, user, email, photo, date, datetime) => {
  const firestore = firebase.firestore();
  return firestore.collection('comments').add({
    postId,
    comment,
    user,
    email,
    photo,
    date,
    datetime,
  });
};
export const editComment = (id, comment) => firebase.firestore().collection('comments').doc(id).update({ comment });
export const deleteComment = id => firebase.firestore().collection('comments').doc(id).delete();


export const editLike = (id, likes) => firebase.firestore().collection('posts').doc(id).update({ likes });

export const saveLikes = (id) => {
  firebase.firestore().collection('likes').add({
    id,
    count: '01',
  });
};
