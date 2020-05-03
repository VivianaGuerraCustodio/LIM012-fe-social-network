// import { example } from './example.js';
// example();

import { changeView } from './view-controler/router.js';

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);

/* eslint-disable no-console */
/* eslint-disable no-alert */
/* import { example } from './example.js';
 */
// Your web app's Firebase configuration
