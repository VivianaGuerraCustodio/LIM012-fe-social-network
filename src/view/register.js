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
  // const registrar = document.querySelector('.nuevoUsuario');
  // // funcion para registrarse.
  // registrar.addEventListener('click', (event) => {
  //   event.preventDefault();
  //   const email = document.querySelector('.newEmail').value;
  //   const password = document.querySelector('.newPassword').value;
  //   firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
  //   // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     if (errorCode === 'auth/weak-password') {
  //       alert('The password is too weak.');
  //     } else {
  //       alert(errorMessage);
  //     }
  //   });
  // });

  const divElem = document.createElement('div');
  divElem.innerHTML = viewRegister;
  return divElem;
};
