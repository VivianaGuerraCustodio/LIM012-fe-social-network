
export const savePost = (user, date, content) => {
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
};

export const deletePost = (id) => {
  firebase.firestore().collection('posts').doc(id).delete()
    .then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
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
// export const deletePost = idPost => 
// firebase.firestore().collection('users').doc(idPost).delete();

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
