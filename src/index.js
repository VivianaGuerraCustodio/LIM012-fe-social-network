import { example } from './example.js';

example();


document.querySelector('.menu_bar').addEventListener('click',()=>{
  let contador = 1;
  if (contador === 1) {
    document.querySelector('nav').animate({
    left:'0';
    });
    contador=0;
    }else{
    contador=1;
    document.querySelector('nav').animate({
    left:'-100%';
    });
    }
    // console.log('hola chicas')
    });
