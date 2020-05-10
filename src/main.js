// import { example } from './example.js';
// example();

import { changeView } from './view-controler/router.js';

const init = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyAwXhQApvJ9tq-KWDkobxKX3eX02aJnTnY',
    authDomain: 'yachaywasiper.firebaseapp.com',
    // databaseURL: 'https://yachaywasiper.firebaseio.com',
    projectId: 'yachaywasiper',
    storageBucket: 'yachaywasiper.appspot.com',
    messagingSenderId: '310386263852',
    appId: '1:310386263852:web:73a2899abadb931f214e89',
    measurementId: 'G-QTBC8WWL0Y',
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.storage();
  // const profileImg = storage.ref()
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init);

/* iniicializar storage o crear referencias */
/* import { example } from './example.js';
 */
// Your web app's Firebase configuration
