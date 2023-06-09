'use strict';
const contenedor =document.querySelector(".contenedor__login-register");
const login = document.querySelector(".login");
const register = document.querySelector(".register");
const cajaLogin = document.querySelector(".login__trasera");
const cajaregister = document.querySelector(".register__trasera");

document.getElementById("inicio").addEventListener("click",inicio)

document.getElementById("register").addEventListener("click",crearCuenta)
window.addEventListener("resize",anchoPagina)

function crearCuenta(){
  cajaLogin.style.opacity=1;
  cajaregister.style.opacity=0;
  register.style.display="block";
  login.style.display="none";
  
  if(window.innerWidth>850){
    contenedor.style.left="410px";
  }else{
    contenedor.style.left="0";
    cajaLogin.style.display="block";
    cajaregister.style.display="none";
  }
  
}

function inicio(){
  cajaLogin.style.opacity=0;
  cajaregister.style.opacity=1;
  register.style.display="none";
  login.style.display="block";
  
  if(window.innerWidth>850){
    contenedor.style.left="10px";
  }else{
    contenedor.style.left="0";
    cajaLogin.style.display="none";
    cajaregister.style.display="block";
  }
  
}
function anchoPagina (){
  if(window.innerWidth>850){
    cajaLogin.style.display="block";
    cajaregister.style.display="block";
    cajaregister.style.opacity=1;
  }else{
    login.style.display="block";
    register.style.display="none";
    contenedor.style.left="0";
    cajaLogin.style.display="none";
    cajaregister.style.display="block"
  }
}
