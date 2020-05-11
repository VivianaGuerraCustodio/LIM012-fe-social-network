/* eslint-disable import/named */
/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
import { signInOff } from '../controller/firebase.js';
import { changeView } from '../view-controler/router.js';
import { modelProfile } from '../templates/templateProfile.js';
import { templatePost } from '../templates/templatePost.js';

export default () => {
  const viewProfile = `<header>
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
        <a class="profile" href="#/profile">Perfil</a>
      </li>
      <li>
        <a class="logOut">Cerrar Sesion</a>
      </li>
      </ul>
  </nav>
</header>

<section class="main-content">
    <div class="user-information"> </div> 
    <div class="user-post">
      <p class="my-post"> °Mis Publicaciones </p>
      <section class="createPost">  
      </section>
      <section id="insertPost" class="post-done">
        
      </section>    
    </div>
</section>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewProfile;
  const logOut = divElem.querySelector('.logOut');
  logOut.addEventListener('click', () => {
    signInOff();
  });
  const home = divElem.querySelector('.home');
  home.addEventListener('click', () => {
    changeView('#/home');
  });
  const profile = divElem.querySelector('.profile');
  profile.addEventListener('click', () => {
    changeView('#/profile');
  });
  const userInfor = divElem.querySelector('.user-information');
  const db = firebase.firestore();
  const usuariosDB = db.collection('usuarios');
  const userLogueado = firebase.auth().currentUser;
  if (userLogueado !== null) {
    usuariosDB.where('emailUser', '==', userLogueado.providerData[0].email).get().then((onSnapshot) => {
      let photoList = '';
      onSnapshot.forEach((doc) => {
        photoList += modelProfile(doc.data().nameUser, doc.data().photoURL);
      });
      userInfor.innerHTML = photoList;
    });
  }
  const newPost = divElem.querySelector('#insertPost');
  const loadPostProfile = () => {
    if (userLogueado !== null) {
      const postDB = db.collection('posts');
      postDB.where('email', '==', userLogueado.providerData[0].email).get().then((querySnapshot) => {
        let postList = '';
        querySnapshot.forEach((doc) => {
          postList += templatePost(doc.data().user, doc.data().photo,
            doc.data().date, doc.data().content);
          newPost.innerHTML = postList;
        });
      });
    }
  };
  loadPostProfile();
  return divElem;
};
