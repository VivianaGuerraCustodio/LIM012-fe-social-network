import { register } from '../controller/firebase.js';

export default () => {
  const viewRegister = `
  <form class="newUser">
        <div class="formulario">
          <div class="logo"> 
            <img class="logoPrincipal" src="assets/logo-wasi.png">
          </div>
        <input class="newEmail" type="email" placeholder="Correo Electrónico" required> 
        <input class="newPassword" type="password" placeholder="Contraseña" required> 
        <button class= "nuevoUsuario"> Registrar </button>
        </div>
      </form> `;

  const divElem = document.createElement('div');
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
