//Arroglos o arrays 

//Sirven para agrupar elementos del mismo tipo o relacionados 
//Se crean con corchetes 

const numeros = [10, 20, 30, 40, 50];
console.table(numeros);  //Se logran visualizar mejor con table ya que genera la tabla del contenido del arreglo en consola 

const meses = ['enero', 'febrero', 'marzo', 'abril', 1501, true];
console.table(meses);

//El arreglo en JS puede tener todo tipo de valores 

//como acceder a los valores de un arreglo
//Su indice empiza en cero y se logra visualiza a traves de table 

//Acceder a elemento de un arreglo 
console.log(meses[4]);


//Acceder a todos los elementos del arreglo 
meses.forEach( function (meses) {
    console.log(meses)
});

//como saber la longitud de un arreglo 

console.log(meses.length);