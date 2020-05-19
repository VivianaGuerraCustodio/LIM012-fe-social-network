
export const saveUser = (user) => {
  const db = firebase.firestore();
  db.collection('usuarios').doc(user.email).set({
    nameUser: user.displayName,
    photoURL: user.photoURL,
    emailUser: user.email,
  });
};


/* export const getUser = (user) => {
  // console.log(user);
  const db = firebase.firestore();
  db.collection('usuarios')
    .onSnapshot((querySnapshot) => {
      querySnapshot.forEach(() => {
        // console.log('Current data: ', usuarios.data());
      });
    });
}; */
export const getUser = idEmail => firebase.firestore().collection('users').doc(idEmail);

export const savePost = (user, email, photo, date, datetime, content, privacy, url, useruid) => {
  const firestore = firebase.firestore();
  return firestore.collection('posts').add({
    user,
    email,
    photo,
    date,
    datetime,
    content,
    privacy,
    url,
    useruid,
    likes: [],
  });
};
export const editPost = (id, content) => firebase.firestore().collection('posts').doc(id).update({ content });
export const deletePost = id => firebase.firestore().collection('posts').doc(id).delete();


export const saveComment = (postId, comment, user, email, photo, date, datetime, useruid) => {
  const firestore = firebase.firestore();
  return firestore.collection('comments').add({
    postId,
    comment,
    user,
    email,
    photo,
    date,
    datetime,
    useruid,
  });
};
export const editComment = (id, comment) => firebase.firestore().collection('comments').doc(id).update({ comment });
export const deleteComment = id => firebase.firestore().collection('comments').doc(id).delete();


export const editLike = (id, likes) => firebase.firestore().collection('posts').doc(id).update({ likes });
export const editProfile = (id, nameUser) => firebase.firestore().collection('usuarios').doc(id).update({ nameUser });
export const updatePrivacy = (id, status) => firebase.firestore().collection('posts').doc(id).update({ privacy: status });
