import { register } from '../controller/firebase.js';

export default () => {
  const viewRegister = `<img class="imageDetail" src="assets/vista1.jpg">
  <form class="newUser"> 
  <div class="logo"> 
  <img class="logoPrincipal" src="assets/logo-wasi.png">
    </div>
    <p class="p-intro"> Bienvenid@s a YachayWasi, una red social para estudiantes, padres y maestros de todo el Perú. </p>
    <div class="formulario">
      <input class="newEmail" type="email" placeholder="Correo Electrónico" required> 
      <input class="newPassword" type="password" placeholder="Contraseña" required> 
      <button class= "newRegistered-User"> Registrar </button>
    </div>
  </form>`;

  const divElem = document.createElement('div');
  divElem.className = 'form-register';
  divElem.innerHTML = viewRegister;
  const registrar = divElem.querySelector('button');
  // funcion para registrarse.
  registrar.addEventListener('click', (event) => {
    event.preventDefault();
    const email = divElem.querySelector('.newEmail').value;
    const password = divElem.querySelector('.newPassword').value;
    register(email, password);
  });

  // divElem.className = '';
  return divElem;
};
