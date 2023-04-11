'use strict';
document.querySelector('.menu').addEventListener('click',()=>{
  let fondo = document.querySelector('.desplegable');
  let list = document.querySelector('.lista');
  fondo.style.display='flex';
  list.style.right='0px';
  fondo.addEventListener('click',()=>{
    fondo.style.display='none';
    list.style.right='-400px';
  })
})
