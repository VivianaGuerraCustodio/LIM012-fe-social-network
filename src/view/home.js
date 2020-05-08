/* eslint-disable import/no-cycle */
import { signInOff } from '../controller/firebase.js';
import { changeView } from '../view-controler/router.js';
// import { addImgPost } from '../controller/post-storage.js';
import { modelHome } from '../templates/templateHome.js'

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
  firebase.firestore().collection('usuarios').get().then((onSnapshot) => {
    let postList = '';
    onSnapshot.forEach((doc) => {
      postList += modelHome(doc.data().photoURL);
    });
    userCreatePost.innerHTML = postList;
  });

  return sectionElem;
};
