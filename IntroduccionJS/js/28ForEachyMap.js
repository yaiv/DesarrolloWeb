const carrito = [

    { nombre: 'Monitor 20 pulgadas', precio: 500 },
       { nombre: 'Television 50 pulgadas', precio: 700 },
       { nombre: 'Tablet', precio: 300 },
       { nombre: 'Audifonos', precio: 200 },
       { nombre: 'Teclado', precio: 50 },
       { nombre: 'Celular', precio: 500 },
       { nombre: 'Bocinas', precio: 300 },
       { nombre: 'Laptop', precio: 800 }
   ]   



//for each 
carrito.forEach (function (producto) {
    console.log(producto.precio)

    });


//Arrow fuction    
     carrito.forEach ( producto => console.log(producto.nombre));


    // map   
 carrito.map ( producto => console.log(producto.nombre));

//cuando se quiera iterar sobre un arrglo o listado y se quiera poner los elementos en pantalla o mandarlos a consola es util for each 

//Si se quiere crear un nuevo arreglo utilizar map y este lo generara con lo que se ponga en el y se asigna  una nueva varible 
const arreglo1 = carrito.forEach ( producto => producto.nombre);

const arreglo2 = carrito.map ( producto => producto.nombre);

const arreglo3 = carrito.map ( producto => `${producto.nombre} -- ${producto.precio}`);

console.log(arreglo1)
console.log(arreglo2)
console.log(arreglo3)