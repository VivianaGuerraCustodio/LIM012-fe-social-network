/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
import { logIn, googleAuth } from '../controller/firebase.js';
// eslint-disable-next-line import/named
// import { changeView } from '../view-controler/router.js';

export default () => {
  const viewLogin = `
  <img class="imageDetail" src="assets/vista1.jpg">
  <form class="logIn"> 
    <div class="logo"> 
    <img class="logoPrincipal" src="assets/logo-wasi.png">
      </div>
      <p> Bienvenid@s a YachayWasi, una red social para Estudiantes, Padres y Maestros de todo el Perú </p>
      <div class="formulario">
        <div class="reg_error_inner" id="reg_error_inner"></div>
        <input class="emailLogin" type="email" placeholder="Correo Electrónico" required> 
        <input class="passwordLogin" type="password" placeholder="Contraseña" required> 
        <button class= "ingresar"> Ingresar </button>
      </div>
      <p class="otherOptions">O puedes ingresar con ...</p>
      <img class="iconGoogle" src="assets/iconG.png"/>
      <p class="p-Options">¿No tienes cuenta?,<a class="register"  href="#/register">Regístrate</a> </p>
  </form>`;
  const sectionElem = document.createElement('section');
  sectionElem.className = 'login';
  sectionElem.innerHTML = viewLogin;
  const login = sectionElem.querySelector('.ingresar');
  // const iconFB = sectionElem.querySelector('.iconFb');
  const iconGoogle = sectionElem.querySelector('.iconGoogle');
  login.addEventListener('click', (event) => {
    event.preventDefault();
    const emailLogin = sectionElem.querySelector('.emailLogin').value;
    const passwordLogin = sectionElem.querySelector('.passwordLogin').value;
    logIn(emailLogin, passwordLogin).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        sectionElem.querySelector('#reg_error_inner').innerHTML = 'Wrong password.';
      } else {
        sectionElem.querySelector('#reg_error_inner').innerHTML = errorMessage;
      }
    });
  });
  /* iconFB.addEventListener('click', (event) => {
    event.preventDefault();
    facebookAuth().catch((error) => {
      const errorMessage = error.message;
      sectionElem.querySelector('#reg_error_inner').innerHTML = errorMessage;
    });
  }); */
  iconGoogle.addEventListener('click', (event) => {
    event.preventDefault();
    googleAuth();
  });
  return sectionElem;
};
