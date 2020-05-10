/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
import { signInOff } from '../controller/firebase.js';
import { changeView } from '../view-controler/router.js';
// import { addImgPost } from '../controller/post-storage.js';
import { modelHome } from '../templates/templateHome.js';
import { modelPost } from '../templates/templatePost.js';

export default () => {
  const viewHome = ` <header>
  <div class="login">
  <a class="login-start" href="#">
  </a>
  </div>
  <div class="register-user">
  <a class="register" href="#/register"> 
  </a>
  </div>
  <nav class= "menu">
    <ul class="menubar">
    <li>
        <a class="home" href="#/home">Inicio</a>
      </li>
      <li>
        <a class ="profile" href="#/profile">Perfil</a>
      </li>
      <li>
        <a class="logOut">Cerrar Sesion</a>
      </li>
      </ul>
  </nav>
</header> 
<section class="post-Container">
  <section class="createPost">
  </section>

  <section class="post-done">
  </section>
  
</section>`;

  const sectionElem = document.createElement('section');
  sectionElem.className = 'homeContainer';
  sectionElem.innerHTML = viewHome;

  const logOut = sectionElem.querySelector('.logOut');
  logOut.addEventListener('click', (event) => {
    event.preventDefault();
    signInOff();
    changeView('#/login');
  });
  const home = sectionElem.querySelector('.home');
  home.addEventListener('click', () => {
    changeView('#/home');
  });
  const profile = sectionElem.querySelector('.profile');
  profile.addEventListener('click', () => {
    changeView('#/profile');
  });
  // const btnAddImg = sectionElem.querySelector('.addImg');
  // btnAddImg.addEventListener(('click'), (e) => {
  //   const file = e.target.files;
  //   const userPost = firebase.auth().currentUser;
  //   addImgPost(file, userPost.uid);
  // });
  const userCreatePost = sectionElem.querySelector('.createPost');
  const db = firebase.firestore();
  const usuariosDB = db.collection('usuarios');
  const userPostNew = firebase.auth().currentUser;
  if (userPostNew !== null) {
    usuariosDB.where('emailUser', '==', userPostNew.providerData[0].email).get().then((onSnapshot) => {
      let userList = '';
      onSnapshot.forEach((doc) => {
        userList += modelHome(doc.data().photoURL);
      });
      userCreatePost.innerHTML = userList;
    });
  }


  const userPostDone = sectionElem.querySelector('.post-done');
  const userLogueado = firebase.auth().currentUser;
  if (userLogueado !== null) {
    usuariosDB.where('emailUser', '==', userLogueado.providerData[0].email).get().then((onSnapshot) => {
      let userListPost = '';
      onSnapshot.forEach((doc) => {
        userListPost += modelPost(doc.data().nameUser, doc.data().photoURL);
        // const storage = firebase.storage();
        const uploader = sectionElem.querySelector('.uploader');
        const btnAddImg = sectionElem.querySelector('.addImg');
        btnAddImg.addEventListener('change', (e) => {
          // alert('si funciona');
          // abre una ventana para que elijas el archivo desde tu dispositivo
          const file = e.target.files[0];
          // crea una carpeta de referencia donde se guardar el archivo que deseas subir
          const storageRef = firebase.storage().ref(`postImg/${file.name}`);
          // subiendo archivo
          const task = storageRef.put(file);
          // subiendo archivo ( barra de progreso)
          task.on('state_changed',
            (snapshot) => {
              const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              uploader.value = percentage;
            },
            function error(err) {
              console.log(error(err));
            },
            () => {
              console.log('archivo cargado');
            });
          // en todo esto, el archivo se sube automaticamente a storage sin necesidad de hacer click
          // en publicar,
          // en la funcionalidad del boton publicar se debe llamar al archivo subido por el usuario.
        });
      });
      userPostDone.innerHTML = userListPost;
    });
  }

  return sectionElem;
};
