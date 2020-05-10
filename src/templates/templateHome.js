/* eslint-disable no-unused-expressions */
export const modelHome = picture => `<div class="top-create-post"> 
        <img src= "${picture}" class = "user" >
        <div class="writePost">
            <textarea class="textarea" rows="5" cols="50"></textarea>
        </div>
    </div>    
    <div class="lower-create-post"> 
        <div class="progress"> </div>
        <input type="file" class= "addImg"  src="assets/agregarIng.png"> 
<progress value="0" max="100" class="uploader"> 0% </progress>
        <select name="options" class="selectPrivacy">
        <option value="public"  class="styleSelect">Público</option>
        <option value="private" class="styleSelect">Privado</option>
        </select>
        <button class="btnPost">Publicar</button>
    </div>`;
