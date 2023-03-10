
function validateForm() {
  var name = document.getElementById("floatingInput01").value;
  var lastName = document.getElementById("floatingInput02").value;
  var email = document.getElementById("floatingInput03").value;
  var phone = document.getElementById("floatingNumber").value;
  var message = document.getElementById("floatingTextarea2").value;
  var nameRegex = /^[a-zA-Z ]{2,30}$/;
  var lastNameRegex = /^[a-zA-Z ]{2,30}$/;
  var emailRegex = /^\S+@\S+\.\S+$/;
  var phoneRegex = /^\d{10}$/;

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