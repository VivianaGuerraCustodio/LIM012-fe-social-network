/* eslint-disable no-unused-expressions */
export const modelProfile = (name, picture) => {
  return `<div class="profile-container">
                <figure><img src="assets/ejemplo de portada.jpg" class="img-portada"></figure>
            </div>
            <div class="logged-user-data">
                <img src ="${picture}" class="img-user">;
                <div class="information-user">
                    <div class="name">
                    <p> ${name}</p>
                    <p> Prof. Educ. Inicial</p></div>
                    <button class="btn-Editar-Perfil">Editar Perfil</button>
                </div>
            </div>
</div>`;
};
