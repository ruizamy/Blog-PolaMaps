'use strict';
document.querySelector('.menu').addEventListener('click',()=>{
  let fondo = document.querySelector('.desplegable');
  let list = document.querySelector('.lista');
  fondo.style.display='flex';
  list.style.right='0px';
  fondo.addEventListener('click',()=>{
    fondo.style.display='none';
    list.style.right='-350px';
  })
})

// funcionamiento del boton para la opinion

document.querySelector('.desplegar').addEventListener('click',()=>{
  let opinion = document.querySelector('.escribir')
  opinion.style.display='flex';
  opinion.style.animation='aparecer 1s forwards';

    document.querySelector('.desplegar').addEventListener('dblclick',()=>{
      opinion.style.animation='desaparecer 1s forwards';
    })

})
