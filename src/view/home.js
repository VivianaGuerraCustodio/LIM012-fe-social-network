/* eslint-disable import/no-cycle */
import { signInOff } from '../controller/firebase.js';
import { changeView } from '../view-controler/router.js';
import { savePost, deletePost} from '../controller/firestore.js';
import { templatePost } from './templateHome.js';
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
<section class="createPost">
  <div class="top-create-post"> 
    <img class = "user" src= "assets/user.png">
    <div class="writePost">
      <textarea id="newPublication" name="textarea" rows="5" cols="50"></textarea>
    </div>
  </div>    
  <div class="lower-create-post"> 
    <img class= "addImg" src= "assets/agregarIng.png">
    <select name="options" class="selectPrivacy">
      <option value="public"  class="styleSelect">Público</option>
      <option value="private" class="styleSelect">Privado</option>
    </select>
    <button id="btnNewPublication" class="btnPost">Publicar</button>
    <button id="btnDeletePublication" class="btnPost">Eliminar</button>
  </div>
</section>

<section  id="insertPost"></section>
`;

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

  // realizar una publicacion

  const btnNewPost = sectionElem.querySelector('#btnNewPublication');
  const inputTexTarea = sectionElem.querySelector('#newPublication');
  // const btnDeletePost = sectionElem.querySelector('#btnDeletePublication');
  const newPost = sectionElem.querySelector('#insertPost');

  const f = new Date();
  const date = (`${f.getDate()}/${f.getMonth() + 1}/${f.getFullYear()}`);

  btnNewPost.addEventListener('click', (event) => {
    event.preventDefault();
    const textToPost = inputTexTarea.value;
    const user = 'sabina';
    savePost(user, date, textToPost);

    firebase.firestore().collection('posts').onSnapshot((querySnapshot) => {
      let postList = '';
      querySnapshot.forEach((doc) => {
        // eslint-disable-next-line max-len
        postList += templatePost(doc.data().user, doc.data().date, doc.data().content, doc.data().id);
        newPost.innerHTML = postList;
      });
    });
  });

  document.addEventListener('click', (event) => {
    if (event.target.id === 'btnDeletePublication') {
      deletePost('EORpnMdAHWUpoVVcI1KL');
    }
  });
  // const btnAddImg = sectionElem.querySelector('.addImg');
  // btnAddImg.addEventListener(('click'), (e) => {
  //   const file = e.target.files;
  //   const userPost = firebase.auth().currentUser;
  //   addImgPost(file, userPost.uid);
  // });
  /*
  const userCreatePost = sectionElem.querySelector('.createPost');
  const db = firebase.firestore();
  const usuariosDB = db.collection('usuarios');
  const userPostNew = firebase.auth().currentUser;
  if (userPostNew !== null) {
    usuariosDB.where('emailUser', '==', userPostNew.providerData[0].email)
    .get().then((onSnapshot) => {
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
    usuariosDB.where('emailUser', '==', userLogueado.providerData[0].email)
    .get().then((onSnapshot) => {
      let userListPost = '';
      onSnapshot.forEach((doc) => {
        userListPost += modelPost(doc.data().nameUser, doc.data().photoURL);
      });
      userPostDone.innerHTML = userListPost;
    });
  } */

  return sectionElem;
};
