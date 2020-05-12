/* eslint-disable import/named */
/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
import { signInOff, currentUser} from '../controller/firebase.js';
import { changeView } from '../view-controler/router.js';
import { savePost, deletePost } from '../controller/firestore.js';
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
        <div class="top-create-post"> 
        <img src= "${currentUser().photoURL}" class = "user" >
          <div class="writePost">
              <textarea id="newPublication" class="textarea" rows="5" cols="50"></textarea>
          </div>
        </div>    
        <div class="lower-create-post"> 
          <div class="progress"> </div>
          <input type="image" id="addImage" class= "addImg"  src="assets/agregarIng.png"> 
          <select name="options" class="selectPrivacy">
            <option value="public"  class="styleSelect">Público</option>
            <option value="private" class="styleSelect">Privado</option>
          </select>
          <button id="btnNewPublication" class="btnPost">Publicar</button>
        </div>
      </section>
      <section id="allPost" class="post-done">
        
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

  const loadPostProfile = () => {
    const allPostProfile = divElem.querySelector('#allPost');
    allPostProfile.innerHTML = '';
    if (userLogueado !== null) {
      const postDB = db.collection('posts');
      postDB.where('email', '==', userLogueado.providerData[0].email).onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const post = doc.data();
          post.id = doc.id;
          const postElement = templatePost(post);
          const btnDelete = postElement.querySelector('.btnRemove');
          btnDelete.addEventListener('click', () => {
            deletePost(post.id).then(() => {
              console.log('eliminando');
              loadPostProfile();
            });
          });
          allPostProfile.appendChild(postElement);
        });
      });
    }
  };
  const btnNewPost = divElem.querySelector('#btnNewPublication');
  const inputTexTarea = divElem.querySelector('#newPublication');
  // const selectImg = sectionElem.querySelector('#addImage');
  const f = new Date();
  const date = (`${f.getDate()}/${f.getMonth() + 1}/${f.getFullYear()}`);

  btnNewPost.addEventListener('click', (event) => {
    event.preventDefault();
    const user = userLogueado.providerData[0].displayName;
    const email = userLogueado.providerData[0].email;
    const photo = userLogueado.providerData[0].photoURL;
    const textToPost = inputTexTarea.value;
    const hours = new Date();
    const datetime = (`${hours.getFullYear()}${hours.getMonth() + 1}${hours.getDate()}${hours.getHours()}${hours.getMinutes()}${hours.getSeconds()}`);
    savePost(user, email, photo, date, datetime, textToPost).then(() => {
      if (userLogueado !== null) {
        loadPostProfile();
      }
    });
  });
  loadPostProfile();
  return divElem;
};
