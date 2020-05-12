/* eslint-disable import/no-cycle */
import { register } from '../controller/firebase.js';

export default () => {
  const viewRegister = `<img class="imageDetail" src="assets/vista1.jpg">
  <form class="newUser"> 
  <div class="logo"> 
  <img class="logoPrincipal" src="assets/logo-wasi.png">
    </div>
    <p class="p-intro"> Bienvenid@s a YachayWasi, una red social para estudiantes, padres y maestros de todo el Perú. </p>
    <div class="formulario">
      <div class="reg_error_inner" id="reg_error_inner"></div>
      <input class="newEmail" type="email" placeholder="Correo Electrónico" required> 
      <input class="newPassword" type="password" placeholder="Contraseña" required> 
      <button class= "newRegistered-User"> Registrar </button>
      <p> <a class="change-login"  href="#/login">Inicia sesión </a> </p>
    </div>
  </form>`;

  const divElem = document.createElement('div');
  divElem.className = 'form-register';
  divElem.innerHTML = viewRegister;
  const registrar = divElem.querySelector('button');
  const login = divElem.querySelector('.change-login');
  // funcion para registrarse.
  registrar.addEventListener('click', (event) => {
    event.preventDefault();
    const email = divElem.querySelector('.newEmail').value;
    const password = divElem.querySelector('.newPassword').value;
    register(email, password).then(() => {
      if (register) {
        login.style.display = 'block';
      }
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/weak-password') {
        divElem.querySelector('#reg_error_inner').innerHTML = 'The password is too weak.';
      } else {
        divElem.querySelector('#reg_error_inner').innerHTML = errorMessage;
      }
    });
  });

  // divElem.className = '';
  return divElem;
};
