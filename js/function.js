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
  if(window.innerWidth>850){
    cajaLogin.style.opacity=1;
  cajaregister.style.opacity=0;
  login.style.display="none";
  register.style.display="block";
  contenedor.style.left="410px";
  }else{
    cajaLogin.style.display="block";
  cajaregister.style.display="none";
  register.style.display="block";
  login.style.display="none"
  register.style.opacity=1;

  }
  
}

function inicio(){
  if(window.innerWidth>850){
    cajaLogin.style.opacity=0;
  cajaregister.style.opacity=1;
  register.style.display="none";
  login.style.display="block"
  contenedor.style.left="10px";
  }else{
    cajaLogin.style.display="none";
  cajaregister.style.display="block";
  register.style.display="none";
  login.style.display="block"
  contenedor.style.left="0";
  }
  
}
function anchoPagina (){
  if(window.innerWidth>850){
    cajaLogin.style.display="block";
    cajaregister.style.display="block";
    register.style.display="none";
    login.style.display="block"
  }else{
    login.style.display="block";
    register.style.display="none";
    contenedor.style.left="0";

  }
}
