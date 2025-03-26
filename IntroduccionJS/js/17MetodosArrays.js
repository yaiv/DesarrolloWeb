const numeros = [10, 20, 30, 40, 50];
console.table(numeros);



//Agregar elemento a arreglo  al final del arreglo  PUSH
//Aunque s epuede agregar se recomienda no modificar los arreglos originales 

numeros.push(60, 70, 80);

//Agregar elemento al final del arreglo  UNSHIFT 

numeros.unshift(-10, -20, -30);



//ELIMINAR ELEMENTOS DEL ARREGLO 

const meses = ['enero', 'febrero', 'marzo', 'abril', 1501, true];

meses.pop(); // Se elimina el ultimo elemento  con POP
meses.shift(); //Se elimina el primer elemento con SHIFT 
meses.splice(2,1); // Se elimina por seleccion de elementos, pero se debe de especificar en base al indice, cuantos valores elimar a partir del indice 

console.table(meses);




//Se propone no modificar elementos del arreglo original mediante 

//Rest Operator o Spread Operator 

const nuevoArreglo = [...meses, 'Noviembre'];
console.log(nuevoArreglo)