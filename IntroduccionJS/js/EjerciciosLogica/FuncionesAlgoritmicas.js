/*FuncionesAlgoritmicas

Algoritmo que ilustra
el uso de varias funciones matematicas 
disponibles en el lenguaje algorıtmico 
y en los difentes lenguajes de programacion
*/

//Primer Intento con Error
//let numero = parseInt ( prompt ('Ingrese el numero al cual se le realizaran las funciones algebraicas') );

//numero = Math.sin;
//numero = Math.cos;
//numero = Math.tan;
//numero = Math.SQRT2wha
//numero = Math.LN2
//numero = Math.LN10
//
//console.log(numero);

//Segundo intento 


let numero = parseFloat ( prompt ( 'Ingrese el numero al que se le van a calcular las Funciones Algoritmicas' ) );

let seno = Math.sin (numero);
let coseno = Math.cos (numero);
let tangente = Math.tan (numero);
let raiz = Math.sqrt (numero);
let logaritmoN = Math.log (numero);
let logaritmo10 = Math.log10 (numero);

console.log( `Las funciones algebraicas del numero ${numero} son las siguientes: ` );
console.log("El seno es: " + seno);
console.log("El coseno es: " + coseno);
console.log("La tangente es: " + tangente);
console.log("La raiz Cuadrada es: " + raiz);
console.log("El logaritmo natural es: " + logaritmoN);
console.log("El logaritmo base 10 es: " + logaritmo10);

