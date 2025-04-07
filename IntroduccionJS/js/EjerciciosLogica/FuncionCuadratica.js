// EJERCICIO 2.9. Construya un algoritmo que permita encontrar las dos
// 				soluciones reales a una ecuacion algebraica de segundo grado a partir de
// 				la formula general. Suponga por ahora que el ejercicio planteado no tiene
// 				soluciones imaginarias.  Formula general: 
		

// 		ANALISIS:

// 			Resultados esperados:Se espera la respuesta de la ecuacion x1 y x2, suponiendo que son reales

// 			Datos disponibles: Se deben de conocer los valores de a,b,c 

// 			Proceso: Se deben de ingresar los valores de a,b,c, se debera aplicar la formula Genera
// 					escrita en lenguaje algoritmico, una vez para x1 usando + antes del radical y otra para x2 usando - antes de radical
// 					-Se usaran funciones algoritmicas

// 			Variables requeridas: 
			
// 			real a,b,c, x1, x2 

// 			Propuesta 1: 
// 			FUNCIONCUADRATICA 
// 			// Este algoritmo calcula las dos soluciones de una
// 			// ecuacion cuadratica. Teniendo en cuenta que estas 
// 			// deben ser reales por ahora

// 			var 
// 			real a,b,c, x1, x2 
// 			imprimir ("Ingrese el valor de a: ")
// 			leer (a)

// 			imprimir ("Ingrese el valor de b:")
// 			leer (b)

// 			imprimir ("Ingrese el valor de c:" )
// 			leer (c)

// 			x1 = (-b + raizCuadrada (b^2 - 4 * a * c)) / (2 * a )
// 			x2 = (-b - raizCuadrada (b^2 - 4 * a * c)) / (2 * a )

// 			imprimir ("El valor de x1 es de: " x1)
// 			imprimir ("El valor de x2 es de: " x2)

// 			// Fin FUNCIONCUADRATICA

let a = parseFloat (prompt ('Ingrese el valor de a:'));
let b = parseFloat (prompt ('Ingrese el valor de b:'));
let c = parseFloat (prompt('Ingrese el valor de c:'));

let x1 = (-b + Math.sqrt (b^2 - 4 * a * c )) / (2 * a);
let x2 = (-b - Math.sqrt (b^2 - 4 * a * c )) / (2 * a);

console.log (`El valor de x1 es de : ${x1}`);
console.log (`El valor de x2 es de : ${x2}`);


//v2 que determina el discrimiante




// let a = parseFloat(prompt("Ingrese el valor de a:"));
// let b = parseFloat(prompt("Ingrese el valor de b:"));
// let c = parseFloat(prompt("Ingrese el valor de c:"));

// // Comprobar que el discriminante es mayor o igual a 0
// let discriminante = Math.pow(b, 2) - 4 * a * c;

// if (discriminante >= 0) {
//   let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
//   let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);

//   console.log(`El valor de x1 es de: ${x1}`);
//   console.log(`El valor de x2 es de: ${x2}`);
// } else {
//   console.log("La ecuación no tiene soluciones reales, ya que el discriminante es negativo.");
// }