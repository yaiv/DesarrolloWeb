// ANALISIS: Diseñe un algoritmo que, al ingresarle el costo de un producto y la cantidad de ese producto que compra un cliente, calcule y muestre el valor a pagar por el cliente, 
// 				  obteniendo igualmente, el valor del impuesto al valor agregado IVA, que corresponde al 16 % del valor de la compra y que tambien el cliente debe pagar.
			
// 			Resultados esperados: Se obtendra el valor total de un producto contemplando el iva 

// 			Datos disponibles: Se solictara al cliente el costo del producto y la cantidad 

// 			Proceso: Una vez con los datos de costo y cantidad se debe de calcular el valor del iva para entregar al cliente el costo total a pagar 

// 			Variables requeridas:  real costo, cantidadCosto, valorIva, totalPagar
// 								   entero cantidad
// 								   const 
// 								   real iva = 0.16  

// 			Propuesta 1: 
// 			PRODUCTOIVA
// 			imprimir ("Ingrese el costo del producto: ")
// 			leer (costo)

// 			imprimir ("Ingres la cantidad de productos: ")
// 			leer (cantidad)

// 			cantidadCosto = costo + cantidad

// 			valorIva = cantidadCosto * iva

// 			totalPagar = cantidadCosto + valorIva

// 			imprimir ("El valor de la compra es de: " cantidadCosto)
// 			imprimir ("El costo total de la compra es: " totalPagar)
// 			imprimir ("El iva es de: " valorIva)

// 			Fin PRODUCTOIVA


const iva = 16.0
let costoP = parseFloat (prompt (`Ingrese el costo del producto`));
let cantidadP = parseInt (prompt (`¿Cual es la cantidad de productos `));
let cantidadCosto = costoP * cantidadP;
let valorIva = cantidadCosto * iva;


console.log(`El valor de la compra es de: ${cantidadCosto}`);
console.log(`El costo total de la compra es: ${t}`)