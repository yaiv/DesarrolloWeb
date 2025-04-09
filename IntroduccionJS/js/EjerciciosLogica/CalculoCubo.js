// Imagine que se conoce el valor del lado de un cubo. Elabore un algoritmo que permita calcular el area total de sus seis caras, el perımetro y el volumen del cubo. El area de una cara se obtiene
// 	por el producto de sus dos lados. El volumen se obtiene elevando al cubo su lado conocido y el perımetro es la suma de todos sus lados.

// 	EJERCICIO 2.11 		

// 		ANALISIS: CULCULO CUBO 

// 			Resultados esperados: Se quiere conocer a partir de las medias de la cara de un cubo al area total de sus seis caras, el perimetro y el volumen del cubo 

// 			Datos disponibles: Se solicita al usuario  el valor de un lado del cubo,  con el cual se obtiene el area del cubo, el perimetro, y se calculara el volumen

// 			Proceso: El area de una cara se obtiene por el producto de sus dos lados. El volumen se obtiene elevando al cubo su lado conocido y el perımetro es la suma de todos sus lados.

// 			Variables requeridas: 
// 			real lado, arealado, areaCub, perimetroCub, volumenCub

// 			Propuesta 1: 
// 			CALCUBO
			
// 			// Se calculara area de un cubo a partir de conocer uno de sus lado, asi como su perimetro y volumen 

// 			imprimir ("Ingrese el area de la arista de una de las caras: ")
// 			leer (lado)

// 			arealado = lado * lado

// 			areaCub = arealado * 6 

// 			perimetroCub = lado * 12 

// 			volumenCub = arealado * arealado * arealado 

// 			imprimir ("El area de una cara del cubo es de: " arealado)
// 			imprimir ("Por lo que el area de sus seis caras es de: " areaCub)
// 			imprimir ("Con un perimetro de " perimetroCub)
// 			imprimir ("Y un volumen de: " volumen)

// 			Fin CALCUBO

let ladoC = parseFloat (prompt('Ingrese el valor de una de las caras del cubo'));
let areaLado = ladoC * ladoC;
let areaC = areaLado * 6; 
let perimetroCub = ladoC * 12;
let volumenCub = areaLado * areaLado * areaLado;

console.log(`El area de una cara del cubo es de: ${areaLado}`)
console.log(`Por lo que el area de sus seis caras es de ${areaC}`)
console.log(`Con un perimetro de ${perimetroCub}`);
console.log(`Y un volumen de ${volumenCub}`);


