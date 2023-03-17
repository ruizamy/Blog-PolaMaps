"use strict";
document.getElementById("btn_registro").addEventListener("click",(e)=>{
  e.preventDefault();
  const correo = document.getElementById("correo").value;
  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;

  const local = JSON.parse(localStorage.getItem("users"))||[];

  const userRegister = local.find(user=>user.correo===correo);
  if(userRegister){
    return alert("El usuario ya esta registrado")
  }
  if(validarCampo()){
    local.push({usuario:usuario,correo:correo,password:password});
    localStorage.setItem("users",JSON.stringify(local));
    document.getElementById("form__register").reset();
    alert("registro exitoso")
  }
  
});

document.getElementById("enter").addEventListener("click",(e)=>{
  e.preventDefault();
  const correo = document.getElementById("correo_sesion").value;
  const pass = document.getElementById("password_sesion").value;

  const local = JSON.parse(localStorage.getItem("users"))||[];

  const singIn = local.find(user=>user.correo===correo && user.password == pass);
if(validarCampo2()){
  if(singIn){
    window.location.href="../index.html";
    return alert("Ingreso exitoso");
    
  }else{
    alert("Usuario o contraseña incorrectos")
  }
}
});

