
/* Este algoritmo calcula la nota final de un
		estudiante a partir de 4 notas parciales a traves
		de la media aritmetica.  */

// function calcularPromedio(){

// let calificaciones = [];
// let suma = 0;

// let numeroNotas = parseFloat(  prompt ('Ingrese la cantidad de materias a evaluar:' ));
// for (let i = 0; i < numeroNotas; i++) {
// let calificacion = parseFloat ( prompt(`Ingresa la calificacion ${i + 1}:` ));
// calificacion.push(calificacion);
// suma += calificacion;
// }
 
// let promedio = suma / numeroNotas; 
// console.log(`El promedio de calificaciones es: ${promedio}`);
// };

// calcularPromedio();



// function calcularPromedio() {
// 	let calificaciones = [];
// 	let suma = 0;
  
// 	let cantidadDeCalificaciones = parseInt(prompt("Introduce el número de calificaciones:"));
// 	for (let i = 0; i < cantidadDeCalificaciones; i++) {
// 	  let calificacion = parseFloat(prompt(`Introduce la calificación ${i + 1}:`));
// 	  calificaciones.push(calificacion);
// 	  suma += calificacion;
// 	}
  
// 	let promedio = suma / cantidadDeCalificaciones;
// 	console.log(`El promedio de calificaciones es: ${promedio}`);
//   }
  
//   // Llamada a la función para ejecutarla
//   calcularPromedio();




// CalificacionEstudiante
// /* Este algoritmo calcula la nota deFin itiva de un
// estudiante a partir de 4 notas parciales a traves
// de la media aritmetica.  */

// Var
// Real cal1, cal2, cal3, cal4, calFin al

// imprimir ("Ingrese la primera calificacion 1: ")
// leer (cal1)

// imprimir ("Ingrese la segunda calificacion 2; ")
// leer (cal2)

// imprimir ("Ingrese la segunda calificacion 2; ")
// leer (cal2)

// imprimir ("Ingrese la segunda calificacion 2; ")
// leer (cal2)

// calFin al = (cal1 + cal2 + cal3 + cal4) / 4
// imprimir ("La calificacion Fin al es: " calFin al)





let cal1 = parseFloat(prompt(`Introduce la primera calificacion:`));
let cal2 = parseFloat(prompt(`Introduce la segunda calificacion:`));
let cal3 = parseFloat(prompt(`Introduce la tercera calificacion:`));
let cal4 = parseFloat(prompt(`Introduce la cuarta calificacion:`));

calFinal = (cal1 + cal2 + cal3 + cal4) / 4;

console.log (`La calificacion final es ${calFinal}`);


