//Object  Methods


// "use strict"   corre el JS en modo estricto, siguiendo buenas practicas 

const producto ={
    nombreProducto : "Monitor 20 pulgadas", 
    precio : 300,
    disponible : true
}

Object.freeze(producto) // .freeze se conjela el objeto es decir, no permite agregar, eliminar, ni modificar elementos del objeto 
producto.imagen = 'imagen.jpg'
console.log(Object.isFrozen(producto)); //permite identificar si un objeto esta sellado con freeze

console.log(producto)




Object.seal (producto);  //No permite eliminar, ni tampoco agregar pero si se pueden modificar los existentes 
producto.imagen= 'imagen.jpg';
console.log(Object.isSealed(producto));  //permite identificar si un objeto esta sellado con seal 
console.log(producto);