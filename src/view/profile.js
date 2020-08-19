/* eslint-disable import/named */
/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
import { signInOff, currentUser } from '../controller/firebase.js';
import { changeView } from '../view-controler/router.js';
import {
  savePost, deletePost, editPost, saveComment, deleteComment, editComment, editLike,
  editProfile, updatePrivacy,
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
        ${currentUser().photoURL ? `<img src= "${currentUser().photoURL}" class = "user" >` : '<img class = "user" src="assets/user.png">'}
          <div class="writePost">
              <textarea id="newPublication" class="textarea" rows="5" cols="50"></textarea>
          </div>
        </div>    
        <div class="lower-create-post"> 
        <progress value= "0" max= "100" id="uploader">0%</progress>
        <input type="file" id="addImage" accept ="image/*" class= "addImg"> 
        <label for= "addImage">
        <img src="assets/agregarIng.png">
        </label>
          <select id="options" class="selectPrivacy">
            <option value="0" selected class="styleSelect">Público</option>
            <option value="1" class="styleSelect">Privado</option>
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
  const db = firebase.firestore();
  const f = new Date();
  const date = (`${f.getDate()}/${f.getMonth() + 1}/${f.getFullYear()}`);
  const usuariosDB = db.collection('usuarios');
  const userLogueado = firebase.auth().currentUser;

  const loadInformationProfile = () => {
    const userInformation = divElem.querySelector('.user-information');
    userInformation.innerHTML = '';
    if (userLogueado !== null) {
      usuariosDB.where('emailUser', '==', userLogueado.providerData[0].email).onSnapshot((onSnapshot) => {
        onSnapshot.forEach((objectprofile) => {
          const user = objectprofile.data();
          user.id = objectprofile.id;
          const profileElement = modelProfile(user);
          const btnEditProfile = profileElement.querySelector('.btn-Editar-Perfil');
          const btnUpdateProfile = profileElement.querySelector('#btnSaveProfile');
          const btnCancelProfile = profileElement.querySelector('#btnCancelProfile');
          btnEditProfile.addEventListener('click', () => {
            console.log('click editar perfil');
            const editablePerfil = profileElement.querySelector('#editProfile');
            editablePerfil.contentEditable = 'true';
            btnUpdateProfile.hidden = false;
            btnCancelProfile.hidden = false;
          });
          btnCancelProfile.addEventListener('click', () => {
            loadInformationProfile();
          });
          btnUpdateProfile.addEventListener('click', () => {
            console.log('UPDATE');
            const userName = profileElement.querySelector('#editProfile').innerHTML;
            editProfile(currentUser().email, userName).then(() => {
              loadInformationProfile();
            });
          });
          userInformation.appendChild(profileElement);
        });
      });
    }
  };
  const loadPostProfile = () => {
    const allPostProfile = divElem.querySelector('#allPost');
    const useruid = userLogueado.uid;
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
              // console.log(comment.id);
              // comment.id es EL ID DEL COMMENT
              const comentElement = modelComment(comment);
              commentContainer.appendChild(comentElement);

              if (comment.useruid === useruid) {
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
              }
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

          if (post.useruid === useruid) {
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
          }
          const btnUpdatePost = postElement.querySelector('#btnSave');
          btnUpdatePost.addEventListener('click', () => {
            const update = postElement.querySelector('#editPost').innerHTML;
            editPost(post.id, update).then(() => {
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
            saveComment(post.id, inputComent.value, user, email, photo,
              date, datetime, useruid).then(() => {
              if (userLogueado !== null) {
                loadPostProfile();
              }
            });
          });

          const btnLike = postElement.querySelector('.btnLike');
          btnLike.addEventListener('click', () => {
            const user = firebase.auth().currentUser;
            const result = post.likes.indexOf(user.uid);
            if (result === -1) {
              post.likes.push(user.uid);
              editLike(post.id, post.likes).then(() => {
                if (user !== null) {
                  loadPostProfile();
                }
              });
            } else {
              post.likes.splice(result, 1);
              editLike(post.id, post.likes).then(() => {
                if (user !== null) {
                  loadPostProfile();
                }
              });
            }
            console.log('click');
          });
          // Options
          const selectPrivacy = postElement.querySelector('.selectPrivacy');
          selectPrivacy.addEventListener('change', () => {
            updatePrivacy(post.id, selectPrivacy.value).then(() => {
              loadPostProfile();
            });
          });
          allPostProfile.appendChild(postElement);
        });
      });
    }
  };

  let file;
  const btnAddImage = divElem.querySelector('#addImage');
  const uploader = divElem.querySelector('#uploader');
  btnAddImage.addEventListener('change', (e) => {
    console.log('CLICK SUBIR IMAGEN', e.target.files[0]);
    // Get file
    file = e.target.files[0];
  });
  const btnNewPost = divElem.querySelector('#btnNewPublication');
  const inputTextArea = divElem.querySelector('#newPublication');

  btnNewPost.addEventListener('click', (event) => {
    event.preventDefault();
    const user = userLogueado.providerData[0].displayName;
    const useruid = userLogueado.uid;
    const email = userLogueado.providerData[0].email;
    const photo = userLogueado.providerData[0].photoURL;
    const textToPost = inputTextArea.value;
    const hours = new Date();
    const datetime = (`${hours.getFullYear()}${hours.getMonth() + 1}${hours.getDate()}${hours.getHours()}${hours.getMinutes()}${hours.getSeconds()}`);
    const selectOption = divElem.querySelector('#options');
    const privacy = selectOption.value;
    if (file) {
      const storageRef = firebase.storage().ref(`postImage/${currentUser().email}/${file.name}`);
      // Upload file
      const task = storageRef.put(file);
      // Update progress bar
      let url = '';
      task.on('state_changed', (snapshot) => {
        const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploader.value = percentage;
      }, () => {
      }, () => {
        task.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log('File available at', downloadURL);
          url = downloadURL;
          savePost(user, email, photo, date, datetime, textToPost,
            privacy, url, useruid).then(() => {
            if (userLogueado !== null) {
              loadPostProfile();
            }
          });
        });
      });
    } else {
      savePost(user, email, photo, date, datetime, textToPost, privacy, null, useruid).then(() => {
        if (userLogueado !== null) {
          loadPostProfile();
        }
      });
    }
    inputTextArea.value = '';
    btnAddImage.value = '';
  });
  loadPostProfile();
  loadInformationProfile();
  return divElem;
};
