export default () => {
  const viewRegister = `<form class="logIn"> 
  <p> Bienvenid@s a YachayWasi, una red social para estudiantes, padres y maestros de todo el Perú </p>
  <div class="formulario">
    <input class="email" type="email" placeholder="Correo Electrónico" required> 
    <input class="password" type="password" placeholder="Contraseña" required> 
    <button class= "ingresar"> Ingresar </button>
  </div>
  
</form>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewRegister;
  return divElem;
};
