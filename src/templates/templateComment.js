
export const modelComment = (Obj) => {
  const divElement = document.createElement('div');
  divElement.className = 'comentario';
  divElement.innerHTML = `
<div class="new-Commentary">
  <img src="${Obj.photo}" class = "userComentImg" > 
  <div class="boxComment">  
    <div class= "dataCommentUser">
      <div class= "headerComment">
        <p id="nameUserC">${Obj.user} </p>
        <time datetime="date">${Obj.date} </time>
      </div>
      <div class="option-edit-post">
        <span>...</span>
          <ul class="optionPost"> 
            <li class="btnEditComment">Editar</li>
            <li  class="btnRemoveComment">Eliminar</li>
          </ul>
      </div> 
    </div>
    <button class="hide" hidden id="btnSaveComment">💾</button>
    <button class="hide" hidden id="btnCancelComment">✖️</button>
    <p contenteditable="false" id="editComment" class="text-CommentC" rows="1" cols="40"> ${Obj.comment}</p>
  </div>
</div>`;
  return divElement;
};
