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
  logOut.addEventListener('click', () => {
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
      });
      userPostDone.innerHTML = userListPost;
    });
  }

  return sectionElem;
};
