//Son utiles cuando se requiere que se ejecute codigo hasta que se deje de cumplir
//o se cumpla una condicion 

// For Loop     Para 

for( let i = 1; i<=100; i ++ ) {
    if ( i % 2 === 0 ){
        console.log ( `El numero ${i} es PAR` );
    } else {
        console.log ( `El numero ${i} es IMPAR` );
    }
}


//Otro ejemplo de for loop para iterar en arreglo

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

   // Se utilizo < carrito.length para conocer su longitud del arreglo y correr el codigo sin importar si son pocos o muchos elementos
   // i ++ ya que se va a iterar sobre cada uno de ellos 
   //     console.log( carrito[i].nombre ) se utilizo para enviar en consola el elemento actual del carrito en particular el nombre

for (let i = 0; i < carrito.length; i++ ) {
    console.log( carrito[i].nombre )

}


// While Loop      Mientas

//Do While Loop     Haz Mientras