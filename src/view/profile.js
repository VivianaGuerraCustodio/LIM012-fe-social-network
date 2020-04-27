export default () => {
  const viewProfile = `<header>
  <div class="login">
  <a class="login-start" href="#">
  </a>
  </div>
  <div class="register-user">
  <a class="register" href="#/register"> 
  </a>
  </div>
  <nav class= "menu">
    <ul class="menubar">
    <li>
        <a href="#/home">Inicio</a>
      </li>
      <li>
        <a href="#/profile">Perfil</a>
      </li>
      <li>
        <a href="#/hola">Cerrar Sesion</a>
      </li>
      </ul>
  </nav>
</header> 
<section class="main-section">
    <div class="main-content">
      <div class="user-information">
        <div class="profile-container">
          <figure>
            <img src="assets/ejemplo de portada.jpg" class="img-portada">
          </figure>
          <div class="logged-user-data-container">
            <img src="assets/user.png" class="imageUser">
            <div class="user-info-container">
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
        <div class="contacts">
        </div>
      </div>
      <div class="user-post">
        <div class="user-new-post">
          <img src="assets/user.png" class="imageUser">
          <textarea name="caja1" id="caja1" class="contTextor" rows="14" cols="50" placeholder="¿Algo que desees contribuir?"></textarea>
          <div class="actions-for-the-user">
            <div class="add-image">
              <img src="assets/agregarIng.png" class="image">
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
                  <button id="btn">Comentario</button>
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
          <div class="for-each-publication">
          </div>
        </div>
      </div>
    </div>
  </section>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewProfile;

  return divElem;
};
