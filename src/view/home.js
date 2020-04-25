export default () => {
  const viewHome = `<section class="createPost">
  <div class="top-create-post"> 
    <img class = "user" src= "assets/user.png">
    <div class="writePost">
      <textarea name="textarea" rows="5" cols="50"></textarea>
    </div>
  </div>    
  <div class="lower-create-post"> 
    <img class= "addImg" src= "assets/agregarIng.png">
    <select name="options" class="selectPrivacy">
      <option value="public"  class="styleSelect">Público</option>
      <option value="private" class="styleSelect">Privado</option>
    </select>
    <button class="btnPost">Publicar</button>
  </div>
  
</section>


<section class="post-done">
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
        <li class="btnSave">Guardar </li>
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
</section>

<section class="post-done">
  <div class="postHeader">
    <div class="user-info">
      <img class = "user" src="assets/user.png">
      <div class= "dateUser">
        <p id="nameUser">Publicado por: María Rodriguez | Prof. Comunicación </p>
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
        <li class="btnSave">Guardar </li>
        <li class="btnEdit">Editar </li>
        <li class="btnRemove">Eliminar </li>
      </ul>
    </div>       
  </div>
  <div class="contentPost">
    <p>Lo más bonito de todo es que no hay nada irrealizable: con trabajo y esfuerzo, puedes convertir cualquier sueño en realidad</p>
  </div>
  <div class="reactions">
    <button type= "button" class ="btnLike"><img src="assets/like-solid-24.png">Me gusta</button>
    <button type= "button" class ="btnComment"><img src="assets/add comment.png">Comentar</button>
  </div>
</section>

<section class="post-done">
  <div class="postHeader">
    <div class="user-info">
      <img class = "user" src="assets/user.png">
      <div class= "dateUser">
        <p id="nameUser">Publicado por: José Alvarado | Prof. Ciencias Sociales </p>
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
        <li class="btnSave">Guardar </li>
        <li class="btnEdit">Editar </li>
        <li class="btnRemove">Eliminar </li>
      </ul>
    </div>       
  </div>
  <div class="contentPost">
    <p>Recuerden que APRENDO EN CASA, se puede sintonizar por TVPERÚ y Radio Nacional </p>
  </div>
  <div class="reactions">
    <button type= "button" class ="btnLike"><img src="assets/like-solid-24.png">Me gusta</button>
    <button type= "button" class ="btnComment"><img src="assets/add comment.png">Comentar</button>
  </div>
</section>`;

  const sectionElem = document.createElement('section');
  sectionElem.innerHTML = viewHome;

  return sectionElem;
};