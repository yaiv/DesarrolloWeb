
// ANALISIS: 
// Un empleado fue contratado durante un periodo especıfico en dıas y por un salario, ambos conocidos. Construya un algoritmo que permita calcular el valor de su liquidacion al terminar el contrato. 
// La liquidacion se compone de prima, cesantıas, intereses a las cesantıas y vacaciones. Para calcular estos valores, se usan las siguientes formulas:
// Prima: (salario * diasLaborados) / 360
// Cesantıas: (salario * diasLaborados) / 360
// Intereses cesantıas: cesantıas * (12 % / diasLaborados)
// Vacaciones: (salario * diasLaborados) / 720

// Resultados esperados: Se requiere el algoritmo que dara el valor de la liquidacion de empleado que se compone a traves de prima, cesantias, interes de cesantia, y vacaciones

// Datos disponibles: Se solicita al usurario los dias laborados y el salario, una vez con los datos se optendra lo equivalente de prima, cesantias, interes de cesantias y vacaciones

// Proceso: Con los datos de dias laborados y salio se realizan los calculos para obtener el total de la liquidacion del empleado 

// Variables requeridas: 

// entero: diasLaborados
// real: salario, prima, cesantia, interesCesantia, vacaciones

// Propuesta 1: 

// ValorLiquidacion

// var: 
// entero: diasLaborados
// real: salario, prima, cesantia, interesCesantia, vacaciones, liquidacion

// imprimir ("Ingrese los dias laborados: ")
// leer (diasLaborados)

// imprimir ("Ingrese el salario: ")
// leer (salario)

// prima = (salario * diasLaborados) / 360
// cesantia = (salario * diasLaborados) / 360 
// interesCesantia = cesantia * (0.12 / diasLaborados)
// vacaciones = (salario * diasLaborados) / 720 
// liquidacion = prima + cesantia + interesCesantia + vacaciones 


// imprimir ("La liquidacion del empleado sera por la cantidad de: " liquidacion)
// imprimir ("La prima es: " prima)
// imprimir ("Las cesantias son: " cesantia)
// imprimir ("Los intereses a las cesantias son: " interesCesantias)
// imprimir ("Las vacaciones son: " vacaciones)

// Fin ValorLiquidacion





// function LiquidacionTotal (salario) {
//     let diasLaborados = parseInt (prompt ('Ingrese la cantidad de dias laborados'));
//     let salario = parseFloat (prompt('Ingrese el salario:'));
//     let prima = (salario * diasLaborados);
//     let cesantia = (salario * diasLaborados / 360);
//     let interesCesantia = cesantia * (0.12 / diasLaborados);
//     let vacaciones = (salario * diasLaborados) / 720;
//     let liquidacion = prima + cesantia + interesCesantia + vacaciones;

//     console.log(`La liquidacion del empleado sera por la cantidad de: ${liquidacion}`);
//     console.log(`La prima es ${prima}`);
//     console.log(`Las cesantias son: ${cesantia}`);
//     console.log(`El interes que se le genera a las cesantias es de: ${interesCesantia}`);
//     console.log(`Las vacaciones son: ${vacaciones}`);

// }

// console.log(LiquidacionTotal);






function LiquidacionTotal() {
    let diasLaborados = parseInt(prompt('Ingrese la cantidad de días laborados'));
    if (isNaN(diasLaborados) || diasLaborados <= 0) {
        console.error('La cantidad de días laborados debe ser un número válido mayor que 0.');
        return;
    }

    let salario = parseFloat(prompt('Ingrese el salario:'));
    if (isNaN(salario) || salario <= 0) {
        console.error('El salario debe ser un número válido mayor que 0.');
        return;
    }

    let prima = Math.floor (salario * diasLaborados);
    let cesantia = Math.floor ((salario * diasLaborados) / 360);
    let interesCesantia =  Math.floor (cesantia * (0.12 / diasLaborados));
    let vacaciones = Math.floor ((salario * diasLaborados) / 720);
    let liquidacion = Math.floor (prima + cesantia + interesCesantia + vacaciones);

    console.log(`La liquidación del empleado será por la cantidad de: ${liquidacion.toFixed(2) }`);
    console.log(`La prima es: ${prima.toFixed(2)}`);
    console.log(`Las cesantías son: ${cesantia.toFixed(2)}`);
    console.log(`El interés que se le genera a las cesantías es de: ${interesCesantia.toFixed(2)}`);
    console.log(`Las vacaciones son: ${vacaciones.toFixed(2)}`);
    
}

LiquidacionTotal();















