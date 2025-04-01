//console.log('Se va a calcular el salario de un empleado');
//
////var
//
//let valorHora, numHora, salario
//
//console.log('Ingrese el valor de la hora:')
//let (valorHora);
//
//console.log('Ingrese el numero de horas laboradas: ')
//let (numHora);
//
//salario = valorHora * numHora;
//
//console.log(`El salario a pagar es de: ${salario}`)



// PAGOEMPLEADO
// Este programa calcula el salario de un empleado
// basado en las horas laboradas y el valor de la hora
// Solicitar valor por hora y número de horas trabajadas
let valorHora = parseFloat(prompt("Ingrese el valor de la hora: "));
let numHora = parseInt(prompt("Ingrese el número de horas laboradas: "));

// Calcular el salario
let valorHoranumHora = valorHora * numHora;

// Mostrar el resultado
console.log("El salario a pagar es: " + valorHoranumHora);

// parseFloat  Convierte una cadena de texto (string) en un número decimal (tipo )
// parseInt Convierte una cadena de texto (string) en un número entero (tipo ).
// promp Es un método del navegador que muestra un cuadro de diálogo para que el usuario ingrese datos.
// El valor ingresado por el usuario siempre es tratado como una cadena de texto (string). Por eso es común usar  o  para convertirlo en un número.

