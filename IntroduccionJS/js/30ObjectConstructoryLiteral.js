//POO

//Object literal 
//Aqui tu colocas los valores, colacas al nombre un valor y al precio su valor 
//No es dinamico, 
// const producto = {
//     nombre: 'Tablet',
//     precio: 500
// }


//CLASE: Es el contenedor de toda la forma, de todos los datos y todos lo metodos y funciones que va a tener un ibjeto en el 

//Object Constructor 
//mas dinamico y no en todos los proyectos 
//EL NOMBRE DE LA CALSE DEBE EMPEZAR CON MAYUSCULAS 

function Producto(nombre, precio, disponibilidad) {
    this.nombre=nombre;
    this.precio=precio;
    this.dispinibilidad=disponibilidad;
}
const producto2 = new Producto('Monitor Curvo 49"', 8000, true);
const producto3 = new Producto('Telefono', 2500, false);
const producto4 = new Producto('Bici', 5000, false);
let producto5 = new Producto('Laptop', 4500, true)

console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);