/* eslint-disable import/named */
/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
import { signInOff } from '../controller/firebase.js';
import { changeView } from '../view-controler/router.js';
import { modelProfile } from '../templates/templateProfile.js';

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
        <div class="top-create-post"> 
          <img class = "user" src= "assets/user.png">
          <div class="writePost">
            <textarea class="textarea" rows="5" cols="50"></textarea>
          </div>
        </div>    
        <div class="lower-create-post"> 
        <input type="image" class= "addImg" src="assets/agregarIng.png"> 
          <select name="options" class="selectPrivacy">
            <option value="public"  class="styleSelect">Público</option>
            <option value="private" class="styleSelect">Privado</option>
          </select>
          <button class="btnPost">Publicar</button>
        </div>
      </section>
      <section class="post-done">
        <div class="postHeader">
          <div class="user-info">
            <img class = "user" src="assets/user.png">
            <div class= "dateUser">
              <p id="nameUser">Publicado por: Laura Benites | Prof. Educ. Inicial </p>
              <select name="options" class="selectPrivacy">
                <option value="public"  class="styleSelect">Público</option>
                <option value="private" class="styleSelect">Privado</option>
              </select>
              <time datetime="date">21/04/2020 </time>
            </div>
          </div>
          <div class="option-edit-post">
            <span>...</span>
            <ul class="optionPost"> 
              <li class="btnEdit">Editar </li>
              <li class="btnRemove">Eliminar </li>
            </ul>
          </div>       
        </div>
        <div class="contentPost">
          <p>Aviso importante: Las clases de Educacion Inicial 3,4 y 5 años están programadas para las 10.00am.</p>
        </div>
        <div class="reactions">
          <button type= "button" class ="btnLike"><img src="assets/like-solid-24.png">Me gusta</button>
          <button type= "button" class ="btnComment"><img src="assets/add comment.png">Comentar</button>
        </div>
        <div class="name-Commentary">
        <textarea class="text-Comment" rows="1" cols="40"></textarea>
        <input type="image" class= "send-Comment" src="assets/send.png"> 
        </div>
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
  const userInformation = divElem.querySelector('.user-information');
  firebase.firestore().collection('usuarios').get().then((onSnapshot) => {
    let photoList = '';
    onSnapshot.forEach((doc) => {
      photoList += modelProfile(doc.data().nameUser, doc.data().photoURL);
    });
    userInformation.innerHTML = photoList;
  });
  return divElem;
};

alert('hello');
