import { example } from './example.js';

example();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAwXhQApvJ9tq-KWDkobxKX3eX02aJnTnY',
  authDomain: 'yachaywasiper.firebaseapp.com',
  databaseURL: 'https://yachaywasiper.firebaseio.com',
  projectId: 'yachaywasiper',
  storageBucket: 'yachaywasiper.appspot.com',
  messagingSenderId: '310386263852',
  appId: '1:310386263852:web:73a2899abadb931f214e89',
  measurementId: 'G-QTBC8WWL0Y',
};
const provider = new firebase.auth.FacebookAuthProvider();
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
