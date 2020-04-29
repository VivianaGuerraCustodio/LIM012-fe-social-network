export default () => {
  const viewProfile = `    <section class="main-section">
  <div class="main-content">
    <div class="user-information">
      <div class="profile-container">
        <figure>
          <img src="assets/ejemplo de portada.jpg" class="img-portada">
        </figure>
        <div class="logged-user-data">
          <img src="assets/user.png" class="imageUser">
          <div class="information-user">
            <div class="name">
              <p>Nombre de Usuari@</p>
            </div>
            <div>
              <div class="type-of-user">
                <p>Maestra</p>
              </div>
            </div>
            <button>Editar</button>
          </div>
        </div>
      </div>
    </div>
    <div class="user-post">
      <div class="new-post">
        <img src="assets/user.png" class="imagePost">
        <textarea name="caja1" id="caja1" class="contTextor" rows="14" cols="50" placeholder="¿Algo que desees contribuir?"></textarea>
        <div class="actions-for-the-user">
          <div class="add-image">
            <img src="assets/add comment.png" class="image">
          </div>
          <div class="select-privacy">
            <select>
              <option>Público</option>
              <option>Privado</option>
            </select>
          </div>
          <button>Publicar</button>
        </div>
      </div>
      <div class="recently-published">
        <div class="for-each-publication">
          <div class="publication-header">
            <img src="assets/user.png" class="imageUser">
            <div>
              <h4>Nombre de usuari@</h4>
              <div class="time">
                <p>04/20/2020</p>
                <div class="select-privacy">
                  <select>
                    <option>Público</option>
                    <option>Privado</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="publication-body">
            <p>Enseñar es dejar una huella en la vida de una persona.</p>
          </div>
          <div class="actions-commentary">
            <div>
              <img src="assets/like-solid-24.png" alt="" class="like">
              <img src="assets/add comment.png" alt="" class="comment">
            </div>
            <p> 6 Me Gusta</p>
          </div>
          <div class="commentary">
            <img src="assets/user.png" class="imageUser-comentary">
            <input type="text" placeholder="Agrega un comentario.">
          </div>
          <div class="add-commentary">
            <img src="assets/user.png" class="imageUser-comentary">
            <div class="">
              <h4>Otr@ usuari@</h4>
              <p>"Porque te quiero abrazar más adelante, me distancio ahora": La motivadora frase de Martín Vizcarra
              </p>
            </div>
            <div class="tres-puntos">
              <span>...</span>
              <ul>
                <li><a href="#">Editar</a></li>
                <li><a href="#">Eliminar</a></li>
              </ul>
            </div>
          </div>

        </div>
        <div class="for-each-publication">post2</div>
        <div class="for-each-publication">post3</div>
      </div>
    </div>
  </div>
</section>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewProfile;

  return divElem;
};
