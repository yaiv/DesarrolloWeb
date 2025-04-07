// Los empleados asalariados en Colombia deben realizar un aporte a seguridad social que consiste en un 4 % para la salud y un 4 % para la pension. Diseñe un algoritmo que permita 
// calcular el valor del aporte que debe realizar un empleado a salud y a pension sobre el salario base, que determine el total del descuento por estos conceptos y cual serıa el 
// valor del salario neto que recibirıa el empleado luego de que le realicen los descuentos.

// ANALISIS:

// Resultados esperados: El algortimo entregara  como resultados el valor a aportar por salud, por pension, la suma de estos y el salario neto que recibira el empleado

// Datos disponibles: Se solicitara al usuario el salario base, del cual se decontara el aporte de seguridad social para la salud del 4%, y tambien se descontara un porcentaje por concepto de pension 4%

// Proceso: Del salio base se descontara 4% de salud y 4 % de pension, el algortimo determinara el total de descuento por estos conceptos  y dara el valor del salario neto luego de descontar estos concpetos

// Variables requeridas:
// real salarioBase, desSalud, desPension, desTotal, salarioNeto

// Propuesta 1:
// 1 Algoritmo SeguridadSocial
// // Este algoritmo calcula el valor del aporte por salud y
// // pension que se hacen sobre el salario base de un 
// // empleado y determina el valor total de estos descuentos
// // y el salario neto a pagar al empleado

// imprimir ("Ingrese su salario base: ")
// leer (salarioBase)

// desSalud = salarioBase * 0.04
// desPension = salarioBase * 0.04

// desTotal = desSalud + desPension

// salarioNeto = salarioBase - desTotal

// imprimir ("El aporte de salud es por: " desSalud)
// imprimir ("El aporte de pension es por: " desPension)
// imprimir ("Los aportes de salud y pension son por la cantidad de: " desTotal)
// imprimir ("El salio tras aportes es por la cantidad de: " salarioNeto)

// // Fin SeguridadSocial

let salarioBase = parseFloat ( prompt ('Ingrese su salario base: ') )

let desSalud = salarioBase * 0.04;
let desPension = salarioBase * 0.04;
let desTotal = desSalud + desPension;
let salarioNeto = salarioBase - desTotal;

console.log(`El aporte de salud es por: ${desSalud.toFixed(3)}`);
console.log(`El aporte de pendsion es por: ${desPension.toFixed(3)}`);
console.log(`Los aportes de salud y pension son por la cantidad de: ${desTotal.toFixed(3)}`);
console.log(`El salario tras aportes es por la cantidad de: ${salarioNeto}`);

