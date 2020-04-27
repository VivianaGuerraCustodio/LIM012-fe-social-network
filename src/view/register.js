export default () => {
  const viewRegister = `<div class="logo"> <img src="https://previews.123rf.com/images/lumut/lumut1707/lumut170700320/81954169-plantilla-logotipo-de-la-educaci%C3%B3n.jpg" width="79%" height="79%"> 
  </div>
  <form class="newUser">
        <div class="formulario">
         <input class="newEmail" type="email" placeholder="Correo Electrónico" required> 
         <input class="newPassword" type="password" placeholder="Contraseña" required> 
         <button class= "nuevoUsuario"> Registrar </button>
         </div>
      </form> `;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewRegister;
  return divElem;
};
