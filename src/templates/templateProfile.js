/* eslint-disable no-unused-expressions */
export const modelProfile = (objProfile) => {
  const divElement = document.createElement('div');
  divElement.className = 'perfil';
  divElement.innerHTML = `
    <div class="profile-container">
        <figure><img src="assets/portada5.jpg" class="img-portada"></figure>
    </div>
    <div class="logged-user-data">
        <img src ="${objProfile.photoURL}" class="img-user">;
        <div class="information-user">
            <div class="name">
                <p> ${objProfile.nameUser}</p>
                <p> Prof. Educ. Inicial</p></div>
                <button class="btn-Editar-Perfil">Editar Perfil</button>
            </div>
        </div>
    </div>`;
  return divElement;
};
