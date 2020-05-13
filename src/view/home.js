/* eslint-disable import/no-cycle */
import { signInOff, currentUser } from '../controller/firebase.js';
import { changeView } from '../view-controler/router.js';
import { savePost, deletePost, saveComent } from '../controller/firestore.js';
// import { addImgPost } from '../controller/post-storage.js';
import { templatePost } from '../templates/templatePost.js';
import { modelComment } from '../templates/templateComment.js';


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

  // STORAGE
  // const btnAddImg = sectionElem.querySelector('.addImg');
  // btnAddImg.addEventListener(('click'), (e) => {
  //   const file = e.target.files;
  //   const userPost = firebase.auth().currentUser;
  //   addImgPost(file, userPost.uid);
  // });

  // const userCreatePost = sectionElem.querySelector('.createPost');
  // const db = firebase.firestore();
  // const usuariosDB = db.collection('usuarios');
  // const userPostNew = firebase.auth().currentUser;
  // if (userPostNew !== null) {
  // usuariosDB.where('emailUser', '==', userPostNew.providerData[0].email)
  // .get().then((onSnapshot) => {
  //     let userList = '';
  //     onSnapshot.forEach((doc) => {
  //       userList += modelPost(doc.data().photoURL);
  //     });
  //     userCreatePost.innerHTML = userList;
  //   });
  // }
  // realizar una publicacion

  const btnNewPost = sectionElem.querySelector('#btnNewPublication');
  const inputTexTarea = sectionElem.querySelector('#newPublication');
  // const selectImg = sectionElem.querySelector('#addImage');
  const f = new Date();
  const date = (`${f.getDate()}/${f.getMonth() + 1}/${f.getFullYear()}`);

  const loadPostHome = () => {
    const allPost = sectionElem.querySelector('#allPost');
    allPost.innerHTML = '';
    const db = firebase.firestore();
    const postDB = db.collection('posts');
    postDB.orderBy('datetime', 'desc').onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const post = doc.data();
        post.id = doc.id;
        const postElement = templatePost(post);

        const pruebaComment = document.createElement('div');
        let listComment = '';
        const commentDB = db.collection('comments');
        commentDB.where('id', '==', doc.id).onSnapshot((comment) => {
          comment.forEach((objComment) => {
            // alert('hola');
            const dataComment = objComment.data();
            // console.log(post);
            listComment = modelComment(dataComment);
            pruebaComment.appendChild(listComment);
          });
        });
        // pruebaComment.innerHTML = listComment;
        postElement.appendChild(pruebaComment);


        const btnDelete = postElement.querySelector('.btnRemove');
        btnDelete.addEventListener('click', () => {
          deletePost(post.id).then(() => {
            console.log('eliminando');
            loadPostHome();
          });
        });
        const btnEdit = postElement.querySelector('.btnEdit');
        btnEdit.addEventListener('click', () => {
        // editPost(post.id, inputTexTarea.value).then(() => {
          console.log('editando');
          // });
        });

        // const commentElement = modelComment(coment);


        const btnComentario = postElement.querySelector('.send-Comment');
        const inputComent = postElement.querySelector('.text-Comment');
        btnComentario.addEventListener('click', () => {
          console.log('click coment');
          const userLogueado = firebase.auth().currentUser;
          const user = userLogueado.providerData[0].displayName;
          const email = userLogueado.providerData[0].email;
          const photo = userLogueado.providerData[0].photoURL;
          const hours = new Date();
          const datetime = (`${hours.getFullYear()}${hours.getMonth() + 1}${hours.getDate()}${hours.getHours()}${hours.getMinutes()}${hours.getSeconds()}`);
          saveComent(post.id, inputComent.value, user, email, photo, date, datetime);
        });

        const btnLike = postElement.querySelector('.btnLike');
        let click = 0;
        const countClick = () => {
          click += 1;
        };
        btnLike.addEventListener('click', () => {
          countClick();
          console.log(click);
        });

        // postElement.appendChild(commentElement);
        allPost.appendChild(postElement);
      });
    });
  };

  btnNewPost.addEventListener('click', (event) => {
    event.preventDefault();
    const userLogueado = firebase.auth().currentUser;
    const user = userLogueado.providerData[0].displayName;
    const email = userLogueado.providerData[0].email;
    const photo = userLogueado.providerData[0].photoURL;
    const textToPost = inputTexTarea.value;
    const hours = new Date();
    const datetime = (`${hours.getFullYear()}${hours.getMonth() + 1}${hours.getDate()}${hours.getHours()}${hours.getMinutes()}${hours.getSeconds()}`);
    savePost(user, email, photo, date, datetime, textToPost).then(() => {
      if (userLogueado !== null) {
        loadPostHome();
      }
    });
  });
  loadPostHome();
  // btnDeletePost.addEventListener('click', (event) => {
  //   event.preventDefault();
  //   deletePost();
  // });

  return sectionElem;
};
