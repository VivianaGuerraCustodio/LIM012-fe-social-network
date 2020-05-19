/* eslint-disable import/no-cycle */
/* eslint-disable import/no-cycle */
import { signInOff, currentUser } from '../controller/firebase.js';
import { changeView } from '../view-controler/router.js';
import {
  savePost, deletePost, editPost, saveComment, deleteComment, editComment, editLike,
} from '../controller/firestore.js';
// import { addImgPost } from '../controller/post-storage.js';
import { templatePost } from '../templates/templatePost.js';
import { modelComment } from '../templates/templateComment.js';
// import { modelComment } from '../templates/templateComment.js';


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
    <img src= ${currentUser().photoURL} class = "user" >
      <div class="writePost">
          <textarea id="newPublication" class="textarea" rows="5" cols="50"></textarea>
      </div>
    </div>    
    <div class="lower-create-post"> 
      <progress value= "0" max= "100" id="uploader">0%</progress>
      <input type="file" id="addImage" accept ="image/*" class= "addImg"> 
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

  const btnNewPost = sectionElem.querySelector('#btnNewPublication');
  const inputTextArea = sectionElem.querySelector('#newPublication');

  const f = new Date();
  const date = (`${f.getDate()}/${f.getMonth() + 1}/${f.getFullYear()}`);

  const loadPostHome = () => {
    const allPost = sectionElem.querySelector('#allPost');
    allPost.innerHTML = '';
    const db = firebase.firestore();
    const postDB = db.collection('posts');
    // READ post
    postDB.orderBy('datetime', 'desc').onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const post = doc.data();
        // console.log(post); TIENE LA DATA + EL ID
        post.id = doc.id;
        // console.log(post.id); EL ID DEL POST
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
                loadPostHome();
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
              loadPostHome();
            });

            const btnUpdateComment = comentElement.querySelector('#btnSaveComment');
            btnUpdateComment.addEventListener('click', () => {
              console.log('UPDATE');
              const commentary = comentElement.querySelector('#editComment').innerHTML;
              editComment(comment.id, commentary).then(() => {
                loadPostHome();
              });
            });
          });
        });
        postElement.appendChild(commentContainer);

        const btnDelete = postElement.querySelector('.btnRemove');
        btnDelete.addEventListener('click', () => {
          deletePost(post.id).then(() => {
            loadPostHome();
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
            loadPostHome();
          });
        });

        const btnCancelEdit = postElement.querySelector('#btnCancel');
        btnCancelEdit.addEventListener('click', () => {
          loadPostHome();
        });

        const btnNewComment = postElement.querySelector('.send-Comment');
        const inputComent = postElement.querySelector('.text-CommentPost');
        btnNewComment.addEventListener('click', () => {
          const userLogueado = firebase.auth().currentUser;
          const user = userLogueado.providerData[0].displayName;
          const email = userLogueado.providerData[0].email;
          const photo = userLogueado.providerData[0].photoURL;
          const hours = new Date();
          const datetime = (`${hours.getFullYear()}${hours.getMonth() + 1}${hours.getDate()}${hours.getHours()}${hours.getMinutes()}${hours.getSeconds()}`);
          saveComment(post.id, inputComent.value, user, email, photo, date, datetime).then(() => {
            if (userLogueado !== null) {
              loadPostHome();
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
                loadPostHome();
              }
            });
          } else {
            post.likes.splice(result, 1);
            editLike(post.id, post.likes).then(() => {
              if (user !== null) {
                loadPostHome();
              }
            });
          }
          console.log('click');
        });

        allPost.appendChild(postElement);
      });
    });
  };
  let file = '';
  const btnAddImage = sectionElem.querySelector('#addImage');
  const uploader = sectionElem.querySelector('#uploader');
  btnAddImage.addEventListener('change', (e) => {
    console.log('CLICK SUBIR IMAGEN', e.target.files[0]);
    // Get file
    file = e.target.files[0];
    // create a storage ref
    /* const storageRef = firebase.storage().ref(`postImage/${currentUser().email}/${file.name}`);
    // Upload file
    const task = storageRef.put(file);
    // Update progress bar
    task.on('state_changed', (snapshot) => {
      const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      uploader.value = percentage;
    }, () => {
    }, () => {
      task.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log('File available at', downloadURL);
      });
    }); */
  });

  btnNewPost.addEventListener('click', (event) => {
    event.preventDefault();
    const userLogueado = firebase.auth().currentUser;
    const user = userLogueado.providerData[0].displayName;
    const email = userLogueado.providerData[0].email;
    const photo = userLogueado.providerData[0].photoURL;
    const textToPost = inputTextArea.value;
    const hours = new Date();
    const datetime = (`${hours.getFullYear()}${hours.getMonth() + 1}${hours.getDate()}${hours.getHours()}${hours.getMinutes()}${hours.getSeconds()}`);
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
        savePost(user, email, photo, date, datetime, textToPost, url).then(() => {
          if (userLogueado !== null) {
            loadPostHome();
          }
        });
      });
    });
    inputTextArea.value = '';
    btnAddImage.value = '';
  });

  loadPostHome();

  return sectionElem;
};

/* <input type="file"  id="addImg" accept ="image/*" class= " uploader addImg">
  <label for= "addImg">
  <img src="assets/agregarIng.png">
  </label>
  <div class="preview"> </div> */
// <input type="image" id="addImage"class= "addImg"  src="assets/agregarIng.png">
// <div class="progress"> </div>
