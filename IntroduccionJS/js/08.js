//Orden de la operaciones 
//Si se quiere que algo se realice primero es mediante parentesis
// Si no se sigue la jerarquia normal de operaciones 

/*
 1.-si una expresión contiene paréntesis, se deben resolver primero las operaciones dentro de ellos, independientemente de la jerarquía de las operaciones que contengan
 2.-Las operaciones de un mismo nivel, como las multiplicaciones y divisiones, o las sumas y restas, se realizan de izquierda a derecha
 */
let resultado;

resultado = (20 + 30) * 2;

//console.log(resultado)

//Incrementos 

let puntaje = 10;
puntaje ++;

console.log(puntaje)

console.log(puntaje++);  //Si se coloca el incremento en el console mantiene el valor y luego da el incrmento o viceversa  ++puntaje 

//Incremento en 1 ++
puntaje++;
++puntaje;

//Decremento en 1 
puntaje--;
--puntaje;