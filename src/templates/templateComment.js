
export const modelComment = (Obj) => {
  const divElement = document.createElement('div');
  divElement.className = 'comentario';
  divElement.innerHTML = `<div class="new-Commentary">
    
    <img src="${Obj.photo}" class = "userComentImg" > 
    <div class= "dataCommentUser">
    <p id="nameUser">${Obj.user} </p>  <time datetime="date">${Obj.date} </time>
    <p class="text-Comment" rows="1" cols="40"> ${Obj.coment}</p>  </div>
    </div>
    <div class="option-edit-post">
    <span>...</span>
    <ul class="optionPost"> 
      <li class="btnEdit">Editar</li>
      <li  class="btnRemove">Eliminar</li>
    </ul>
  </div> `;
  return divElement;
};
