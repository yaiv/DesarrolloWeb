// function Cliente(nombre, apellido){
//     this.nombre = nombre;
//     this.apellido = apellido;
// }

// Cliente.prototype.formatearCliente = function() {
//     return `El cliente se llama ${this.nombre} ${this.apellido}`;
// }

// function Producto(nombre, precio, disponibilidad) {
//     this.nombre=nombre;
//     this.precio=precio;
//     this.dispinibilidad=disponibilidad;
// }

// Producto.prototype.formatearProducto = function () {
//     return `El producto ${this.nombre} tiene un precio de ${this.precio} `;
// }

// const cliente = new Cliente ('Yaiv', 'GM');

// const producto1 = new Producto ('Pc Gamer', 5000);
// const producto2 = new Producto ('Mouse Game', 120);


// console.log(producto2);
// console.log(producto2.formatearProducto);
// console.log(cliente.formatearCliente);



const producto = {
    nombre: 'tablet',
    precio: 500
}

const cliente = {
    nombre: 'prueba',
    apellido: 'prueba'
}

//clase cliente 
function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
//prototypw permite crear funciones que solo se utilizan en un objeto en especifico 
//funcion dentro de prototype
Cliente.prototype.formatearCliente = function() {
    return `El cliente es: ${this.nombre} ${this.apellido}`;
}


//forma en que se agregan los datos 
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio; 
}

//permite crear funciones que solo se utilizan en un objeto en especifico 
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}


const producto2 = new Producto ('raton', 100);
const producto3 = new Producto ('lapicero', 20);
const cliente1 = new Cliente ('Yair', 'Guerra Morales');

function formatearProducto(producto) {
    return `El producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`;
}


console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(cliente1.formatearCliente());
console.log(cliente);


