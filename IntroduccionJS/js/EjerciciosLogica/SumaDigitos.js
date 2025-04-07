/*
Se requiere construir un algoritmo al que se le ingrese un   entero de 3 cifras (Por ejemplo, 927 o 483). El algoritmo debera
			   determinar el valor de la suma de las 3 cifras, 18 para el primer ejemplo y 15 para el segundo ejemplo

*/ 


// SUMA3DIGITOS
// // Solicita un numro  de 3 digitos y suma cada uno de ellos 

// var
// entero  Tres, num1, num2, num3, resultado
// imprimir ("Ingresa un   entero de 3 cifras: ")
// leer ( Tres)

// num1 =  Tres / 100
// num2 = ( Tres / 10) % 10 
// num3 = num3 % 10 

// resultado = num1 + num2 + num3

// imprimir ("La suma de los 3 digitos ingresados es de: " resultado)

// Fin SUMADIGITOS 



let numero = parseInt ( prompt (`Ingresa un numero de tres cifras`) );
let num1 = Math.floor (numero / 100);
let num2 = Math.floor (numero / 10 ) % 10
let num3 = numero % 10

let resultado = num1 + num2 + num3;

console.log(`La suma de los 3 digitos del numero ingresado es: ${resultado.toFixed(2)}`);



//Math.floor (numero / 100);   fuerza que el resultado de la división sea redondeado hacia abajo al número entero más cercano, eliminando los decimales.

// Math.floor (numero / 10); Hace lo mismo, asegurándose de que el segundo dígito sea un entero.

// numero % 10 Obtiene directamente el último dígito (las unidades) sin necesidad de manipulación adicional.