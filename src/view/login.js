import { logIn } from '../controller/firebase.js';

export default () => {
  const viewLogin = `
    <form class="logIn"> 
     <div class="logo"> 
     <img class="logoPrincipal" src="assets/logo-wasi.png">
       </div>
       <p> Bienvenid@s a YachayWasi, una red social para estudiantes, padres y maestros de todo el Perú </p>
       <div class="formulario">
        <input class="emailLogin" type="email" placeholder="Correo Electrónico" required> 
        <input class="passwordLogin" type="password" placeholder="Contraseña" required> 
        <button class= "ingresar"> Ingresar </button>
       </div>
       <p class="otherOptions">O puedes ingresar con ...</p>
       <img class="iconFb" src="assets/iconFb.jpg"/>
       <img class="iconGoogle" src="assets/iconG.png"/>
       <p>¿No tienes cuenta? , <a class="register"  href="#/register">Regístrate</a> </p>
    </form>`;
  const sectionElem = document.createElement('section');
  sectionElem.className = 'login';
  sectionElem.innerHTML = viewLogin;
  const login = sectionElem.querySelector('.ingresar');
  login.addEventListener('click', () => {
    const emailLogin = sectionElem.querySelector('.emailLogin').value;
    const passwordLogin = sectionElem.querySelector('.passwordLogin').value;
    logIn(emailLogin, passwordLogin);
  });
  return sectionElem;
};
