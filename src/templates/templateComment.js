export const modelComment = (Obj) => {
  const divElement = document.createElement('div');
  divElement.className = 'comentario';
  divElement.innerHTML = `<div class="new-Commentary">
    <div>
    <img src="${Obj.photo}" class = "user" > </div>
    <div>
    <p id="nameUser">${Obj.user} </p>  <time datetime="date">${Obj.date} </time>
    <p contenteditable="false" id="editComment"class="text-Comment" rows="1" cols="40"> ${Obj.coment}</p>  </div>
    </div>
    <button class="hide" id="btnSaveComment">Guardar</button>
    <button class="hide" id="btnCancelComment">Cancelar</button>
    <div class="option-edit-post">
    <span>...</span>
    <ul class="optionPost"> 
      <li class="btnEditComment">Editar</li>
      <li  class="btnRemoveComment">Eliminar</li>
    </ul>
  </div> `;
  return divElement;
};
