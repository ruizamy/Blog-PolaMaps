function guardarAlmacenamientoLocal(llave, valor_a_guardar) {
  localStorage.setItem(llave, JSON.stringify(valor_a_guardar))
}
function obtenerAlmacenamientoLocal(llave) {
  const datos = JSON.parse(localStorage.getItem(llave))
  return datos
}

let productos = obtenerAlmacenamientoLocal('productos') || [];
let contenedor = document.getElementById('contenedor')
window.addEventListener('load', ()=>{
  for (let i = 0; i < productos.length; i++){
      contenedor.innerHTML +=`<div><img src="${productos[i].urlImagen}" alt="Informacion de bar"><div class="informacion"><p>${productos[i].nombre}</p><p class="precio">$${productos[i].valor}</p><p class="info">${productos[i].info}</p><button>Comprar</button></div></div>` 
  }
})