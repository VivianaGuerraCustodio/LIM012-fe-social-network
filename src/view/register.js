export default () => {
  const viewRegister = `<div class="logo"> <img src="https://previews.123rf.com/images/lumut/lumut1707/lumut170700320/81954169-plantilla-logotipo-de-la-educaci%C3%B3n.jpg" width="79%" height="79%"> 
  </div>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewRegister;
  return divElem;
};
