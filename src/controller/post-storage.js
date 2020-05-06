export const addImgPost = (file, uid) => {
  const refStorage = firebase.storage().ref(`imgPosts/${uid}/${file.name}`);
  const taskStorage = refStorage.put(file);

  const stateSnapshot = (snapshot) => {
    const percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
    // eslint-disable-next-line no-console
    console.log(percentage);
  };
  const error = () => {
    // eslint-disable-next-line no-console
    console.log('error al cargar la foto');
  };

  const fileAddress = () => {
    taskStorage.snapshot.ref.getDownloadURL()
      .then((url) => {
        // eslint-disable-next-line no-console
        console.log(url);
        sessionStorage.setItem('imgNewPost', url);
      }).catch(() => {
        // eslint-disable-next-line no-console
        console.log('error al obtener url');
      });
  };
  taskStorage.on('state-changed', stateSnapshot, error, fileAddress);
};
