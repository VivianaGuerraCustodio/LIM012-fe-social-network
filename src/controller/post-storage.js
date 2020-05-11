/* eslint-disable no-undef */
export const addImgPost = (file, uid) => {
  const refStorage = firebase.storage().ref(`imgPosts/${uid}/${file.name}`);
  const taskStorage = refStorage.put(file);
  taskStorage.on('state_changed',
    (snapshot) => {
      const percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
      `${'.progress'}`.attr('style', `width: ${percentage}%`);
    },
    (err) => {
      // eslint-disable-next-line no-unused-expressions
      (`error subiendo archivos => ${error.message}`, 4000);
      console.log(err);
    });


  // const fileAddress = () => {
  //   taskStorage.snapshot.ref.getDownloadURL()
  //     .then((url) => {
  //       // eslint-disable-next-line no-console
  //       console.log(url);
  //       sessionStorage.setItem('imgNewPost', url);
  //     }).catch(() => {
  //       // eslint-disable-next-line no-console
  //       console.log('error al obtener url');
  //     });
  // };
  taskStorage.on('state-changed');
};
