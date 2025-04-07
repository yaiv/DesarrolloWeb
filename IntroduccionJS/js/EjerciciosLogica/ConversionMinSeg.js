// EJERCICIO 2.8.  Se requiere construir un algoritmo que, al ingresarle un   de dıas cualquiera, este permita saber cuantos minutos y cuantos segundos tiene la cantidad de dıas ingresados. 
// 				Para ello, es imprescindible saber cuantos minutos tiene un dıa, ası como tambien el   de segundos contenidos en cada dıa, esto se puede obtener al multiplicar el
// 				  de dıas que se ingresaron por la cantidad de horas que tiene cada dıa (24) y a su vez, por la cantidad de minutos que tiene cada hora (60) y por la cantidad de segundos que tiene un minuto (60).

// 		ANALISIS:

// 			Resultados esperados: Se desea saber la cantidad de minutos y segundos que tiene cierta cantidad de dias 

// 			Datos disponibles: Se requiere solicitar la cantidad de dias para calcular los minutos y segundos que contiene 

// 			Proceso: El usuario proporciona en   de dias (entero) para determinar la cantidad de minutos y segundos que contienen los dias ingresados. Se requiere saber cuantos minutos tiene el dia, 
// 			asi como el   de segundos contenidos en cada dia
// 			-Se multiplica la cantidad de dias ingresados por las horas que tiene cada dia (24) y a su vez la cantidad de minutos que tiene cada hora (60) por la cantidad de segundos que tiene un minuto (60)

// 			Variables requeridas: 
// 			entero dias
// 			real: minuto, segundos, cantidadMinSeg

// 			Propuesta 1: 
// 			ConversionMinSeg

// 			 // Este algoritmo encuentra la cantidad de minutos
// 			 // contenidos en un determinado   de dıas
// 			 // ası como la cantidad de segundos.

// 			imprimir ("Ingrese la cantidad de dias a calcular (enteros): ")
// 			leer (dias)

// 			minutos = dias * 24 * 60
// 			segundos = minutos * 60 

// 			imprimir  (dias, "días equivalen a: ")
// 			imprimir  (minutos, "minutos")
// 			imprimir (segundos, "segundos")

// 			Fin ConversionMinSeg


let dias = parseInt (prompt ('Ingrese la cantidad de días a calcular'));
let horas = Math.floor (dias * 24);
let minutos = Math.floor (dias * 24 * 60);
let segundos = Math.floor (minutos * 60);

console.log (`${dias} días equivalen a: `);
console.log (`${horas} horas`);
console.log (`${minutos} minutos`);
console.log (`${segundos} segundos`);


//Codigo optimizado como funcion 

// function calcularTiempo(dias) {
//     let horas = Math.floor(dias * 24);
//     let minutos = Math.floor(dias * 24 * 60);
//     let segundos = Math.floor(minutos * 60);
  
//     console.log(`${dias} días equivalen a:`);
//     console.log(`${horas} horas`);
//     console.log(`${minutos} minutos`);
//     console.log(`${segundos} segundos`);
//   }
  
//   // Llamada a la función para ejecutarla
//   let diasIngresados = parseInt(prompt("Ingrese la cantidad de días a calcular"));
//   calcularTiempo(diasIngresados);



