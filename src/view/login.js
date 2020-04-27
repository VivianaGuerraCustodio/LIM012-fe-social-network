export default () => {
  const viewLogin = `
    <form class="logIn"> 
     <div class="logo"> 
     <img class="logoPrincipal" src="assets/logo-wasi.png">
       </div>
       <p> Bienvenid@s a YachayWasi, una red social para estudiantes, padres y maestros de todo el Perú </p>
       <div class="formulario">
        <input class="email" type="email" placeholder="Correo Electrónico" required> 
        <input class="password" type="password" placeholder="Contraseña" required> 
        <button class= "ingresar" href="#/home"> Ingresar </button>
       </div>
       <p class="otherOptions">O puedes ingresar con ...</p>
       <img class="iconFb" src="assets/iconFb.jpg"/>
       <img class="iconGoogle" src="assets/iconG.png"/>
       <p>¿No tienes cuenta? , <a class="register"  href="#/register">Regístrate</a> </p>
    </form>`;
  const sectionElem = document.createElement('section');
  sectionElem.innerHTML = viewLogin;
  return sectionElem;
};
