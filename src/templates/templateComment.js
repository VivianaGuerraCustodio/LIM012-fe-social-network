
export const modelComment = (objComment) => {
  const user = firebase.auth().currentUser;
  const divElement = document.createElement('div');
  divElement.className = 'userComment';
  divElement.innerHTML = `
<div class="new-Commentary">
${objComment.photo ? `<img class = "userComentImg" src="${objComment.photo}" > ` : '<img class="userComentImg" src="assets/user.png">'}
  <div class="boxComment">  
    <div class= "dataCommentUser">
      <div class= "headerComment">
        <p id="nameUserC">${objComment.user} </p>
        <time datetime="date">${objComment.date} </time>
      </div>
    ${(user.uid === objComment.useruid) ? `
      <div class="option-edit-post">
        <span>...</span>
          <ul class="optionPost"> 
            <li class="btnEditComment">Editar</li>
            <li  class="btnRemoveComment">Eliminar</li>
          </ul>
      </div> ` : ''}
    </div>
    <button class="hide" hidden id="btnSaveComment">💾</button>
    <button class="hide" hidden id="btnCancelComment">✖️</button>
    <p contenteditable="false" id="editComment" class="text-Comment" rows="1" cols="40"> ${objComment.comment}</p>
  </div>
</div>`;
  return divElement;
};
