/* eslint-disable no-shadow */
/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
import { signInOff } from '../controller/firebase.js';
import { changeView } from '../view-controler/router.js';
import { savePost } from '../controller/firestore.js';
// import { addImg } from '../controller/post-storage.js';
import { modelPost } from '../templates/templatePost.js';
// import { addImg } from '../../public/src/controller/post-storage.js';
// import { modelHome } from '../templates/templateHome.js';


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
  <div class="top-create-post"> 
  <img src= "assets/user.png" class = "user" >
  <div class="writePost">
      <textarea id="newPublication" class="textarea outline" rows="5" cols="50"></textarea>
  </div>
</div>    
<div class="lower-create-post"> 
<input type="file"  id="addImg" accept ="image/*" class= " uploader addImg"> 
  <label for= "addImg">
  <img src="assets/agregarIng.png">
  </label>
  <div class="preview"> </div>
  <select name="options" class="selectPrivacy">
  <option value="public"  class="styleSelect">Público</option>
  <option value="private" class="styleSelect">Privado</option>
  </select>
  <button id="btnNewPublication" class="btnPost">Publicar</button>
</div>
  </section>

  <section id="insertPost" class="post-done">
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

  // STORAGE
  const btnAddImg = sectionElem.querySelector('.addImg');
  btnAddImg.addEventListener(('change'), (e) => {
    const inputFile = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function (input) {
      console.log(input);
      localStorage.setItem('img', `${input.target.result}`);
      console.log(localStorage.getItem('img'));
    };
    reader.readAsDataURL(inputFile);
    const preview = sectionElem.querySelector('.preview');
    localStorage.setItem('imgName', `${inputFile.name}`);
    preview.innerHTML = `${inputFile.name}`;
  });

  const btnNewPost = sectionElem.querySelector('#btnNewPublication');
  const inputTexTarea = sectionElem.querySelector('#newPublication');
  const newPost = sectionElem.querySelector('#insertPost');
  const f = new Date();
  const date = (`${f.getDate()}/${f.getMonth() + 1}/${f.getFullYear()}`);
  const loadPostHome = () => {
    const db = firebase.firestore();
    const postDB = db.collection('posts');
    postDB.orderBy('datetime', 'desc').get().then((querySnapshot) => {
      let postList = '';
      querySnapshot.forEach((doc) => {
        postList += modelPost(doc.data().user, doc.data().photo,
          doc.data().date, doc.data().content, doc.data().postImg);
        newPost.innerHTML = postList;
      });
    });
  };
  const imgPost = localStorage.getItem('img');
  const nameImage = localStorage.getItem('imgName');
  btnNewPost.addEventListener('click', (event) => {
    event.preventDefault();
    const userLogueado = firebase.auth().currentUser;
    const user = userLogueado.providerData[0].displayName;
    const email = userLogueado.providerData[0].email;
    const photo = userLogueado.providerData[0].photoURL;
    const textToPost = inputTexTarea.value;
    const hours = new Date();
    const datetime = (`${hours.getFullYear()}${hours.getMonth() + 1}${hours.getDate()}${hours.getHours()}${hours.getMinutes()}${hours.getSeconds()}`);
    const imgRef = firebase.storage().ref(`postImg/${nameImage}`);
    imgRef.putString(imgPost, 'data_url').then((snapshot) => {
      console.log('archivo cargado');
      return snapshot.ref.getDownloadURL();
    }).then((url) => {
      savePost(user, email, photo, date, datetime, textToPost, url);
    });
    if (userLogueado !== null) {
      loadPostHome();
    }
  });
  loadPostHome();
  // const btnDelete('.btnRemove'):
  // btnDeletePost.addEventListener('click', (event) => {
  //   event.preventDefault();
  //   deletePost();
  // });

  return sectionElem;
};
