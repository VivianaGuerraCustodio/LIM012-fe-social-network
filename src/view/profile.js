export default () => {
  const viewProfile = `<header>
  <div class="login">
  <a class="login-start" href="#">
  </a>
  </div>
  <div class="register-user">
  <a class="register" href="#/register"> 
  </a>
  </div>
  <nav class= "menu">
    <ul class="menubar">
    <li>
        <a href="#/home">Inicio</a>
      </li>
      <li>
        <a href="#/profile">Perfil</a>
      </li>
      <li>
        <a href="#/hola">Cerrar Sesion</a>
      </li>
      </ul>
  </nav>
</header> 
<img class = "portada" src="https://i.pinimg.com/originals/f4/ba/04/f4ba048069fb1977fe838e925ff41e81.jpg">
    <img class ="user" src="https://img2.freepng.es/20181127/rcc/kisspng-computer-icons-user-scalable-vector-graphics-login-set-menu-personal-settings-px-svg-png-icon-free-do-5bfdc61ed1a448.2136901815433579828587.jpg"> 
    <p> Nombre del usuario </p>
    <p> Maestr@ / alumn@ / Padre de Familia </p>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewProfile;

  return divElem;
};
