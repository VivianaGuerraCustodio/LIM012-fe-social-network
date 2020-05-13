export const templatePost = (objPost) => {
  const divElement = document.createElement('div');
  divElement.className = 'posteo';
  divElement.innerHTML = `
  <div class="postHeader">
    <div class="user-info">
      <img class = "user" src="${objPost.photo}">
      <div class= "dateUser">
        <p id="nameUser">Publicado por: ${objPost.name} | Prof. Educ. Inicial </p>
        <select name="options" class="selectPrivacy">
          <option value="public"  class="styleSelect">Público</option>
          <option value="private" class="styleSelect">Privado</option>
        </select>
        <time datetime="date">${objPost.date} </time>
      </div>
    </div>
    <div class="option-edit-post">
      <span>...</span>
      <ul class="optionPost"> 
        <li class="btnEdit">Editar</li>
        <li class="btnRemove">Eliminar</li>
      </ul>
    </div>       
  </div>
  <div class="contentPost">
    <p contenteditable="false" id="editPost" >${objPost.content}</p>
  </div>
  <button class="hide" id="btnSave">Guardar</button>
  <button class="hide" id="btnCancel">Cancelar</button>
  <div class="reactions">
    <div class="countLikes">
      <label class="count" >0</label>
      <button type= "button" class ="btnLike"><img src="assets/like-solid-24.png">Me gusta</button>
    </div>
    <button type= "button" class ="btnComment"><img src="assets/add comment.png">Comentar</button>
  </div>
  <div class="name-Commentary">
  <textarea class="text-Comment" rows="1" cols="40"></textarea>
  <input type="image" class= "send-Comment" src="assets/send.png"> 
  </div>`;
  return divElement;
};
