function guardarAlmacenamientoLocal(llave, valor_a_guardar) {
  localStorage.setItem(llave, JSON.stringify(valor_a_guardar))
}
function obtenerAlmacenamientoLocal(llave) {
  const datos = JSON.parse(localStorage.getItem(llave))
  return datos
}

let productos = obtenerAlmacenamientoLocal('bares') || [];
let mensaje = document.getElementById('mensaje')

//Añadir un producto
const añadirProducto = document.getElementById('productoAñadir')
const añadirValor = document.getElementById('valorAñadir')
const añadirExistencia = document.getElementById('existenciaAñadir')
const añadirImagen = document.getElementById('ImagenAñadir')
const añadirInfo = document.getElementById('infoAñadir')

document.getElementById("botonAñadir").addEventListener("click", function (event) {
  event.preventDefault()
  let productoAñadir = añadirProducto.value
  let imagenAñadir = añadirImagen.value
  let infoAñadir = añadirInfo.value

  let van = true

  if (productoAñadir == '' ||  imagenAñadir == ''|| infoAñadir == '') {
      mensaje.classList.add('llenarCampos')
      setTimeout(() => { mensaje.classList.remove('llenarCampos') }, 2500)
      van = false
  }
  else {
      for (let i = 0; i < productos.length; i++) {
          if (productos[i].nombre == productoAñadir) {
              mensaje.classList.add('repetidoError')
              setTimeout(() => { mensaje.classList.remove('repetidoError') }, 2500)
              van = false
          }
      }
  }

  if (van == true) {
      productos.push({
          nombre: productoAñadir,
          urlImagen: imagenAñadir,
          info: infoAñadir
      })
      mensaje.classList.add('realizado')
      setTimeout(() => {
          mensaje.classList.remove('repetidoError')
          window.location.reload()
      }, 1500)
  }
  guardarAlmacenamientoLocal('bares', productos);
})

// Editar
const productoEd = document.getElementById('productoEditar')
const atributoEd = document.getElementById('atributoEditar')
const nuevoAtributoEd = document.getElementById('nuevoAtributo')

document.getElementById("botonEditar").addEventListener("click", function (event) {
  event.preventDefault()
  let productoEditar = productoEd.value
  let atributoEditar = atributoEd.value
  let nuevoAtributo = nuevoAtributoEd.value
  let van = false
  if (productoEditar == '' || atributoEditar == '' || nuevoAtributo == '') {
      mensaje.classList.add('llenarCampos')
      setTimeout(() => { mensaje.classList.remove('llenarCampos') }, 2500)
  }
  else {
      for (let i = 0; i < productos.length; i++) {
          if (productos[i].nombre == productoEditar) {
              productos[i][atributoEditar] = nuevoAtributo
              van = true
          }
      }
      if (van == true) {
          mensaje.classList.add('realizado')
          setTimeout(() => {
              mensaje.classList.remove('realizado')
              window.location.reload()
          }, 1500);
      }
      else {
          mensaje.classList.add('noExisteError')
          setTimeout(() => { mensaje.classList.remove('noExsiteError') }, 2500);
      }
      guardarAlmacenamientoLocal('bares', productos);
  }
})

// Eliminar
const productoE = document.getElementById('productoEliminar')

document.getElementById("botonEliminar").addEventListener("click", function (event) {
  event.preventDefault()
  let productoEliminar = productoE.value
  let van = false

  for (let i = 0; i < productos.length; i++) {
      if (productos[i].nombre == productoEliminar) {
          productos.splice(i, 1)
          van = true
      }
  }

  if (van == false) {
      mensaje.classList.add('noExsiteError')
      setTimeout(() => { mensaje.classList.remove('noExsiteError') }, 2500);
  }
  else {
      mensaje.classList.add('realizado')
      setTimeout(() => {
          mensaje.classList.remove('realizado')
          window.location.reload()
      }, 1500);
  }
  guardarAlmacenamientoLocal('bares', productos);
})

// mostrar productos
window.addEventListener("load", () => {
  const productoEd = document.getElementById('productoEditar')
  const productoEl = document.getElementById('productoEliminar')
  for (let i = 0; i < productos.length; i++) {
      productoEd.innerHTML += `<option>${productos[i].nombre}</option>`
      productoEl.innerHTML += `<option>${productos[i].nombre}</option>`
  }
  Object.keys(productos[0]).forEach(element => {
      atributoEd.innerHTML += `<option>${element}</option>`
  });

  let mostraProductos = document.getElementById('mostrarProductos')
  mostraProductos.innerHTML = ''
  for (let i = 0; i < productos.length; i++) {
      mostraProductos.innerHTML += `<div class="contenedorProductos"><img src="${productos[i].urlImagen}"><div class="informacion"><p>${productos[i].nombre}</p><p class="precio"></p><p class="info">${productos[i].info}</p></div></div>`
  }
})