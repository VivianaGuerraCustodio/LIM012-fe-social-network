
export const savePost = (user, date, content) => {
  const firestore = firebase.firestore();
  firestore.collection('users').add({
    user,
    date,
    content,
  }).then((posts)=>{
    console.log('Document written with ID', posts.id);
  }).catch((error) => {
    console.error('Error adding document: ', error);
  });
};

/*
// instantánea del documento en firestore
export const getRealtimeUpdates = () => {
  const firestore = firebase.firestore();
  const posts = firestore.doc('users/posts');
  posts.onSnapshot((doc) => {
    const post = doc.data();
    console.log(post);
  });
};
getRealtimeUpdates(); */

// borrar post falta implementar
export const deletePost = idPost => firebase.firestore().collection('users').doc(idPost).delete();
