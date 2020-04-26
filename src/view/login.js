export default () => {
  const viewLogin = `<div class="logo"> <img src="https://previews.123rf.com/images/lumut/lumut1707/lumut170700320/81954169-plantilla-logotipo-de-la-educaci%C3%B3n.jpg" width="79%" height="79%"> 
    </div>
    <form class="logIn"> 
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
