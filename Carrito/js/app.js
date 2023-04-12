const shopContent = document.getElementById('shopContent');/* unir los productos uniendolos desde el JS */
const verCarrito = document.getElementById('verCarrito');
const modalContainer = document.getElementById('modal-container');

const showAlert = document.getElementById('showAlert');
const cantidadCarrito = document.getElementById('cantidadCarrito');
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];/* se esta llamando a la variable carrito para que se guarde en el local storage || [] se usa para determinar o guardar una lista de elementos *//* para decirle donde se almacenan los datos en este caso en carrito que  */
productos.forEach((products) => {/* aqui se llama a la constante de mi lista de products */
  let content = document.createElement("div");/* el (createElement es para crear un nuevo elemento div-contenedor para guardar todos los elementos) */
  content.className = "card";/* Aqui se creo una clase para el contenedor de los productos */
  content.innerHTML = `
  <img src = "${products.img}"/> 
  <h2> "${products.nombre}" </h2>
  <p> "${products.precio}" </p>
  `; /* para agregar codigo html el (innerHTML) AHOA si quiero agregar las caracteristicas de mis productos lo hare con el ${llamo mi jsde productos.caracteristica} `las comillas son necesarios para agregar el arreglo de products */

  let comprar = document.createElement("button"); /* asi se crea la clase comprar, ahora como esta sera un boton necesitasa agregar el codifo document.createElemnt("tipo de elemento")  */
  comprar.innerHTML = "Añadir al carrito";/* asi le asignas el nombre  que se muestraal elemento que acabas de crear */
  comprar.className = "comprar";/* el nombre de la clase en el css */
  content.append(comprar);/* el contenedor de mi carrito  */
  shopContent.append(content);/* shopContent esta en un div en el html y es el que va a agregar los elemento del carrito de compras .appende es para ingresar contenido, y esta nombrado a una nueva clase de nombre comprar */
  comprar.addEventListener("click", () => {
    const repeat = carrito.some((repeatproduct) => repeatproduct.id === products.id);/*  se declara la constante que se repita el producto === estistamente igual, ==es asignacion, !es diferente; par que se repita el carrito*/
    if (repeat) /* if para crear una condicional, para una condicion se le leeria "si se repite la variable" */ {
      carrito.map((prod) => {
        if (prod.id === products.id) {
          prod.cantidad++;/* esta .cantidad ++ confirma comprueba que se esta agregando mas */
        }
      }) /* el map ayuda a recorrer y actualizar mi lista de productos */
    } 
    else {
      carrito.push ({
        id: products.id, 
        nombre: products.nombre,
        precio: products.precio,
        img: products.img,
        cantidad: products.cantidad,
      });
      console.log(carrito);
      console.log(carrito.length);
      carritoCounter();/* cuando colocas un () frente a una variable estas llamando a una funcion  */
      saveLocal();
     };
  });
}); /* esta variable esta conectado el app.js con products, son doble parentesis es para para llamar los productos y el segundo es para establecer que es un metodo (=> para saber que datos voy a llamar el (forEach hace un llamado a los elementos contenidos en el documento */
const saveLocal = ()=> {
  localStorage.setItem("carrito", JSON.stringify(carrito)) /* JSON,stringify toma los datos que estan en el localstora para  */
}
