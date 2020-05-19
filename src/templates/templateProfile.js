/* eslint-disable no-unused-expressions */
export const modelProfile = (objProfile) => {
  const divElement = document.createElement('div');
  divElement.className = 'userProfile';
  divElement.innerHTML = `
  <div class="profile-container">
  <figure><img src="assets/portada5.jpg" class="img-portada"></figure>
  </div>
  <div class="logged-user-data">
  ${objProfile.photoURL ? `<img src="${objProfile.photoURL}" class="img-user"> ` : '<img class="img-user" src="assets/user.png">'}
    <div class="information-user">
        <div class="name">
        <p id="editProfile" contenteditable="false"> ${objProfile.nameUser}</p>
        <p> Prof. Educ. Inicial</p></div>
        <button class="hide" hidden id="btnSaveProfile">💾</button>
        <button class="hide" hidden id="btnCancelProfile">✖️</button>
        <button class="btn-Editar-Perfil">Editar Perfil</button>
    </div>
  </div>
</div>`;
  return divElement;
};
