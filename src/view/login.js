export default () => {
  const viewLogin = `<div class="logo"> <img class="logo-children" src="assets/logo-niños.jpg"> 
    </div>
    <form class="logIn"> 
      <img class="logo-yachaywasi" src="assets/logo-wasi.png">
      <p> Bienvenid@s a YachayWasi, una red social para estudiantes, padres y maestros de todo el Perú </p>
      <div class="formulario">
        <input class="email" type="email" placeholder="Correo Electrónico" required> 
        <input class="password" type="password" placeholder="Contraseña" required> 
        <button class= "ingresar"> Ingresar </button>
      </div>
      <div class="otherOptions>
      <p class="otherNet">O puedes ingresar con ...</p>
      <img class="iconFb" src="assets/iconFb.jpg"/>
      <img class="iconGoogle" src="assets/iconG.png"/>
      <p>¿No tienes cuenta? , <a href="#/register">Regístrate</a> </p>
      </div>
    </form>`;

  const sectionElem = document.createElement('section');
  sectionElem.className = 'login';
  sectionElem.innerHTML = viewLogin;
  return sectionElem;
};
