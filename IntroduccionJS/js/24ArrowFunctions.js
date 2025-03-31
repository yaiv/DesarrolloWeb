//ArroyFunctions

//forma tradicional 
//const sumar2 = function (n1, n2) {
//    console.log( n1 + n2);
//}
//
//sumar2(5, 10)


//mediante arraw functions

//La estructura basica es 

    //const ejemplo = () => {

    //}

const sumar2 = (n1,n2) => console.log(n1 + n2);
sumar2(5, 10)


const aprendiendo = (tecnologia) => {
    console.log(`Aprendiendo tecnologia ${tecnologia}`)
}

aprendiendo('JS')

//En una sola linea quedaria como 

// const aprendiendo = tecnologia => console.log (`Aprendiendo la tecnologia: ${tecnologia}`)

//aprendiendo('tecnologia seleccionada')



const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];

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

//Ejemplos sin ser arrow functions
meses.forEach(function (mes){
    if(mes == 'marzo') {
        console.log('marzo si existe');
    }
    
})

resultado = carrito.some (function(producto){
    return producto.nombre === 'Celular'
})


//Arrow Functions

//forEach
meses.forEach ( mes =>{
    if(mes == 'marzo') {
        console.log('marzo si existe');
    }
    
})


//Some ideal para arreglo de objetos
resultado = carrito.some ( producto => producto.nombre === 'Celular');

//Reduce 
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

//Filter
resultado = carrito.filter(producto => producto.precio <=400);

resultado = carrito.filter(producto => producto.nombre !=='Celular');



console.log(resultado);