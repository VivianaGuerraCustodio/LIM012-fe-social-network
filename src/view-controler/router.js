import { components } from '../view/index.js';
// import register from '../view/register.js';

const changeView = (hash) => {
  const id = hash.split('/')[1];
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (hash) {
    case '':
    case '#':
    case '#/':
    { return container.appendChild(components.login()); }
    case '#/register':
    case '#/home':
    case '#/profile':
    { return container.appendChild(components[id]()); }
    default:
      return container.appendChild(components.error());
  }
};

export { changeView };
