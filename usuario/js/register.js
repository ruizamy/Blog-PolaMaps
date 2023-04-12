"use strict";
document.getElementById("btn_registro").addEventListener("click",(e)=>{
  e.preventDefault();
  const correo = document.getElementById("correo").value;
  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;

//   const local = JSON.parse(localStorage.getItem("users"))||[];

//   const userRegister = local.find(user=>user.correo===correo);
//   if(userRegister){
//     return alert("El usuario ya esta registrado")
//   }
//   if(validarCampo()){
//     local.push({usuario:usuario,correo:correo,password:password});
//     localStorage.setItem("users",JSON.stringify(local));
//     document.getElementById("form__register").reset();
//     alert("registro exitoso")
//   }
  
// });

// document.getElementById("enter").addEventListener("click",(e)=>{
//   e.preventDefault();
//   const correo = document.getElementById("correo_sesion").value;
//   const pass = document.getElementById("password_sesion").value;

//   const local = JSON.parse(localStorage.getItem("users"))||[];

//   const singIn = local.find(user=>user.correo===correo && user.password == pass);
// if(validarCampo2()){
//   if(singIn){
//     window.location.href="../index.html";
//     return alert("Ingreso exitoso");
    
//   }else{
//     alert("Usuario o contraseña incorrectos")
//   }
// }
let respuesta = false;
fetch(`localhost:8080/usuario/query${correo}`)
  .then(res=>res.json())
  .then(data=>{
      if(data.email==correo){
        alert("El correo ya ha sido registrado");
        respuesta=true;
      }
    });
  if(respuesta = false){
    fetch(`localhost:8080/usuario`,{
      method:"POST",
      body:`{"nombreUsuario":${usuario},"email":${correo},"password":${password}}`,
      headers:{"Content-type":"application/json"}
    })
    .then(res=>console.log(res))
  }

});

