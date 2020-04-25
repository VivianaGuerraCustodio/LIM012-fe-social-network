export default () => {
  const viewProfile = `<img class = "portada" src="https://i.pinimg.com/originals/f4/ba/04/f4ba048069fb1977fe838e925ff41e81.jpg">
    <img class ="user" src="https://img2.freepng.es/20181127/rcc/kisspng-computer-icons-user-scalable-vector-graphics-login-set-menu-personal-settings-px-svg-png-icon-free-do-5bfdc61ed1a448.2136901815433579828587.jpg"> 
    <p> Nombre del usuario </p>
    <p> Maestr@ / alumn@ / Padre de Familia </p>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewProfile;

  return divElem;
};
