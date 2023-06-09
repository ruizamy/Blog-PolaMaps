var nameRegex = /^[a-zA-Z ]{2,30}$/;
  var lastNameRegex = /^[a-zA-Z ]{2,30}$/;
  var emailRegex = /^\S+@\S+\.\S+$/;
  var phoneRegex = /^\d{10}$/;

function validateForm() {
  var name = document.getElementById("floatingInput01").value;
  var lastName = document.getElementById("floatingInput02").value;
  var email = document.getElementById("floatingInput03").value;
  var phone = document.getElementById("floatingNumber").value;
  var message = document.getElementById("floatingTextarea2").value;

  if (!nameRegex.test(name)) {
    alert("Por favor ingresa un nombre valido.");
    return false;
  }
  if (!lastNameRegex.test(lastName)) {
    alert("Por favor ingresa un apellido valido.");
    return false;
  }
  if (!emailRegex.test(email)) {
    alert("Por favor ingresa una direccion de correo valida.");
    return false;
  }
  if (!phoneRegex.test(phone)) {
    alert("digita un numero de 10 dititos.");
    return false;
  }
  if (message == "") {
    alert("ingresa un mensaje.");
    return false;
  }
  sendEmail();
  limpiarFormulario();
  return false;
}

function sendEmail(){
  console.log("Email sent")
}
function limpiarFormulario(){
  document.getElementById("name").value = ""
}
const validarCampo = ()=>{
  const correo = document.getElementById("correo").value;
  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;

  var passReg = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  
  if (!nameRegex.test(usuario)) {
    alert("Por favor ingresa un nombre valido.");
    return false;
  }
  if (!emailRegex.test(correo)) {
    alert("Por favor ingresa una direccion de correo valida.");
    return false;
  }
  if(!passReg.test(password)){
    alert("La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.")
    return false;
  }
  return true;
}
const validarCampo2 = ()=>{
  const corIni = document.getElementById("correo_sesion").value;
    const passIni = document.getElementById("password_sesion").value;
  if(corIni == ""|| passIni == ""){
    alert("complete los campos correctamente")
    return false; 
  }else{
    return true;
  } 
}