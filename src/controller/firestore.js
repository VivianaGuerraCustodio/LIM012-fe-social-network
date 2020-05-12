
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

export const savePost = (user, email, photo, date, datetime, content) => {
  const firestore = firebase.firestore();
  return firestore.collection('posts').add({
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
export const deletePost = id => firebase.firestore().collection('posts').doc(id).delete();

export const editPost = (id, content) => firebase.firestore().collection('posts').doc(id).update({ content });

export const saveComent = (id, coment) => {
  firebase.firestore().collection('comments').add({
    id,
    coment,
  });
};

/* export const savePost = (user, date, content) => {
  const firestore = firebase.firestore();
  firestore.collection('posts').add({
    user,
    date,
    content,
  }).then((posts)=>{
    console.log('Document written with ID', posts.id);
  }).catch((error) => {
    console.error('Error adding document: ', error);
  });
}; */