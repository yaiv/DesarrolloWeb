// EJERCICIO 2.10. 		Construya un algoritmo que al ingresarle la cantidad de metros cuadrados de la casa o apartamento en la que se va a instalar el piso y el
// 						costo de la caja de ceramica, este permita saber cuantas cajas debe comprar y el costo total de las mismas.

// 		ANALISIS: 
		
// 			Resultados esperados: el algoritmo debe determinar el numero  de cajas de ceramica a comprar y el costo total de las mismas.

// 			Datos disponibles: se debe conocer la cantidad de metros cuadrados que posee el inmueble (casa o apartamento) donde se va
// 							   a instalar la ceramica y el costo de la caja de ceramica seleccionada para hacer la instalacion.

// 			Proceso: con la cantidad de metros cuadrados se debe realizar una division entre 2.26, que corresponde al numero  de metros cuadrados
// 					cubiertos por la ceramica que trae cada caja; con esto se obtendra el numero  de cajas necesarias. Ahora, conociendo el numero  de cajas,
// 					se multiplica por el valor de las cajas y se obtendra el costo de este material.

// 			Variables requeridas: 
			
// 			real metroCuadrado, numCaja, costoCaja, costoNumCaja

// 			Propuesta 1: CALCULADORMETROSCUADRADOS
// 			imprimir ("Ingrese el   de metros cuadrados: ")
// 			leer (metroCuadrado)

// 		 	imprimir ("Ingrese el costo por caja: ")
// 			leer (costo)

// 			numCaja = metroCuadrado / 2.26 

// 			costoNumCaja = numCaja * costo


// 			imprimir ("El   de cajas que se necesita son: " numCaja)
// 			imprimir ("El costo sera de: " costoNumCaja)

// 			Fin CALCULADORMETROSCUADRADOS

let metroCuadrado = Math.floor (prompt (`Ingrese el número de metros cuadrados que necesita cubrir: `));
let cajaMetros = Math.floor (prompt (`Ingrese cuantos metros cuadrados cubre la caja a comprar: `));
let costo = Math.floor (prompt('Ingrese el costo de la caja: '));

let numCaja = metroCuadrado / cajaMetros;

let costoNumCaja = numCaja * costo; 

console.log(`El numero de cajas que se van a requerir son: ${numCaja.toFixed(2)}`);
console.log(`El precio a pagar sera de: ${costoNumCaja.toFixed(2)}`);
