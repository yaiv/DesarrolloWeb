function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function() {
    return `El cliente se llama ${this.nombre} ${this.apellido}`;
}

function Producto(nombre, precio, disponibilidad) {
    this.nombre=nombre;
    this.precio=precio;
    this.dispinibilidad=disponibilidad;
}

Producto.prototype.formatearProducto = function () {
    return `El producto ${this.nombre} tiene un precio de ${this.precio} `;
}

const cliente = new Cliente ('Yaiv', 'GM');

const producto1 = new Producto ('Pc Gamer', 5000);
const producto2 = new Producto ('Mouse Game', 120);
console.log(producto2);
console.log(producto2.formatearProducto);
console.log(cliente.formatearCliente);
