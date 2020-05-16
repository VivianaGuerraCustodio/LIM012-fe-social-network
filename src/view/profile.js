/* eslint-disable import/named */
/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
import { signInOff, currentUser } from '../controller/firebase.js';
import { changeView } from '../view-controler/router.js';
import {
  savePost, deletePost, editPost, saveComment, deleteComment, editComment, saveLikes,
} from '../controller/firestore.js';
import { modelProfile } from '../templates/templateProfile.js';
import { templatePost } from '../templates/templatePost.js';
import { modelComment } from '../templates/templateComment.js';
// import { modelComment } from '../templates/templateComment.js';

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
        <img src= "${currentUser.photoURL}" class = "user" >
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
    changeView('#/login');
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
  const db = firebase.firestore();
  const f = new Date();
  const date = (`${f.getDate()}/${f.getMonth() + 1}/${f.getFullYear()}`);
  const usuariosDB = db.collection('usuarios');
  const userLogueado = firebase.auth().currentUser;
  if (userLogueado !== null) {
    usuariosDB.where('emailUser', '==', userLogueado.providerData[0].email).get().then((onSnapshot) => {
      onSnapshot.forEach((objectprofile) => {
        const user = objectprofile.data();
        user.id = objectprofile.id;
        const profileElement = modelProfile(user);
        userInformation.appendChild(profileElement);
      });
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

          const commentContainer = document.createElement('div');
          const commentDB = db.collection('comments');
          commentDB.where('postId', '==', post.id).onSnapshot((querySnapshotComment) => {
            querySnapshotComment.forEach((objComment) => {
              const comment = objComment.data();
              comment.id = objComment.id;
              console.log(comment.id);
              // comment.id es EL ID DEL COMMENT
              const comentElement = modelComment(comment);
              commentContainer.appendChild(comentElement);

              const btnDeleteComment = comentElement.querySelector('.btnRemoveComment');
              btnDeleteComment.addEventListener('click', () => {
                console.log('clickeando eliminar');
                deleteComment(comment.id).then(() => {
                  loadPostProfile();
                });
              });

              const btnEditComment = comentElement.querySelector('.btnEditComment');
              const btnSaveComment = comentElement.querySelector('#btnSaveComment');
              const btnCancelComment = comentElement.querySelector('#btnCancelComment');
              btnEditComment.addEventListener('click', () => {
                console.log('clickeando editar');
                const editableComment = comentElement.querySelector('#editComment');
                editableComment.contentEditable = 'true';
                btnSaveComment.hidden = false;
                btnCancelComment.hidden = false;
              });

              const btnCancelEditComment = comentElement.querySelector('#btnCancelComment');
              btnCancelEditComment.addEventListener('click', () => {
                loadPostProfile();
              });

              const btnUpdateComment = comentElement.querySelector('#btnSaveComment');
              btnUpdateComment.addEventListener('click', () => {
                console.log('UPDATE');
                const commentary = comentElement.querySelector('#editComment').innerHTML;
                editComment(comment.id, commentary).then(() => {
                  loadPostProfile();
                });
              });
            });
          });
          postElement.appendChild(commentContainer);


          const btnDelete = postElement.querySelector('.btnRemove');
          btnDelete.addEventListener('click', () => {
            deletePost(post.id).then(() => {
              loadPostProfile();
            });
          });

          const btnEdit = postElement.querySelector('.btnEdit');
          const btnSave = postElement.querySelector('#btnSave');
          const btnCancel = postElement.querySelector('#btnCancel');
          btnEdit.addEventListener('click', () => {
            const editable = postElement.querySelector('#editPost');
            editable.contentEditable = 'true';
            btnSave.hidden = false;
            btnCancel.hidden = false;
          });

          const btnUpdatePost = postElement.querySelector('#btnSave');
          btnUpdatePost.addEventListener('click', () => {
            const prueba = postElement.querySelector('#editPost').innerHTML;
            editPost(post.id, prueba).then(() => {
              loadPostProfile();
            });
          });

          const btnCancelEdit = postElement.querySelector('#btnCancel');
          btnCancelEdit.addEventListener('click', () => {
            loadPostProfile();
          });

          const btnNewComment = postElement.querySelector('.send-Comment');
          const inputComent = postElement.querySelector('.text-CommentPost');
          btnNewComment.addEventListener('click', () => {
            const user = userLogueado.providerData[0].displayName;
            const email = userLogueado.providerData[0].email;
            const photo = userLogueado.providerData[0].photoURL;
            const hours = new Date();
            const datetime = (`${hours.getFullYear()}${hours.getMonth() + 1}${hours.getDate()}${hours.getHours()}${hours.getMinutes()}${hours.getSeconds()}`);
            saveComment(post.id, inputComent.value, user, email, photo, date, datetime).then(() => {
              if (userLogueado !== null) {
                loadPostProfile();
              }
            });
          });

          const btnLike = postElement.querySelector('.btnLike');
          let click = 0;
          const countClick = () => {
            click += 1;
            postElement.querySelector('.count').innerHTML = click;
          };
          btnLike.addEventListener('click', () => {
            countClick();
            saveLikes(post.id);
            console.log(click);
          });
          allPostProfile.appendChild(postElement);
        });
      });
    }
  };
  const btnNewPost = divElem.querySelector('#btnNewPublication');
  const inputTextArea = divElem.querySelector('#newPublication');

  btnNewPost.addEventListener('click', (event) => {
    event.preventDefault();
    const user = userLogueado.providerData[0].displayName;
    const email = userLogueado.providerData[0].email;
    const photo = userLogueado.providerData[0].photoURL;
    const textToPost = inputTextArea.value;
    const hours = new Date();
    const datetime = (`${hours.getFullYear()}${hours.getMonth() + 1}${hours.getDate()}${hours.getHours()}${hours.getMinutes()}${hours.getSeconds()}`);
    savePost(user, email, photo, date, datetime, textToPost).then(() => {
      if (userLogueado !== null) {
        loadPostProfile();
      }
    });
    inputTextArea.value = '';
  });
  loadPostProfile();
  return divElem;
};
