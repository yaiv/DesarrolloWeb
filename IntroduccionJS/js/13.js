//DESTRUCTURING DE OBJETOS 

const producto ={
    nombreProducto : "Monitor 20 pulgadas", 
    precio : 300,
    disponible : true
}


//Forma en la que se pueden traer valores que estan dentro de un objeto 

//Forma anterior
const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;


//console.log(precioProducto)
//console.log(nombreProducto)


//DESTRUCTURING  - Extrae el valor del objeto y crea la variable en un solo paso 
//Se le aplica destructuring a precio de la variable producto 
const {precio, nombreProducto} = producto;
console.log(precio);
console.log( nombreProducto );