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

//Comprobar si un elemento existe o no existe en un arreglo 
//forEach


meses.forEach(function (mes){
    if(mes == 'marzo') {
        console.log('marzo si existe');
    }
    
})

//Otra forma de hacerlo es mediante includes en arreglos planos 

//const resultado = meses.includes ('noviembre');
//console.log(resultado);

//const resultado2 = meses.includes ('enero');
//console.log(resultado2);

//El metdo que sirve cuand se tienen objetos en el arreglo es con some y distingue entre mayusculas y minisculas


resultado = carrito.some (function(producto){
    return producto.nombre === 'Celular'
})

console.log(resultado)

//Para iterar con todos los elementos y sumar todo lo del arreglo se puede hacer con reduce
//reduce
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);


//forma con array funtion 

//resultado = carrito.reduce((total, producto) => total + producto,0);

//filter

//Sirve para traer lo valores que son mayores, menores, iguales o diferentes a 

resultado = carrito.filter(function(producto){
    return producto.precio <=400
})
console.log(resultado);
