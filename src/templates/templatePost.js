export const modelPost = (name, picture) => {
    <div class="postHeader">
      <div class="user-info">
        <img class = "user" src="assets/user.png">
        <div class= "dateUser">
          <p id="nameUser">Publicado por: Laura Benites | Prof. Educ. Inicial </p>
          <select name="options" class="selectPrivacy">
            <option value="public"  class="styleSelect">Público</option>
            <option value="private" class="styleSelect">Privado</option>
          </select>
          <time datetime="date">21/04/2020 </time>
        </div>
      </div>
      <div class="option-edit-post">
        <span>...</span>
        <ul class="optionPost"> 
          <li class="btnEdit">Editar </li>
          <li class="btnRemove">Eliminar </li>
        </ul>
      </div>       
    </div>
    <div class="contentPost">
      <p>Aviso importante: Las clases de Educacion Inicial 3,4 y 5 años están programadas para las 10.00am.</p>
    </div>
    <div class="reactions">
      <button type= "button" class ="btnLike"><img src="assets/like-solid-24.png">Me gusta</button>
      <button type= "button" class ="btnComment"><img src="assets/add comment.png">Comentar</button>
    </div>
    <div class="name-Commentary">
    <textarea class="text-Comment" rows="1" cols="40"></textarea>
    <input type="image" class= "send-Comment" src="assets/send.png"> 
    </div>
}