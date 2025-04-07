// INTERESCDT

// imprimir ("Ingrese la cantidad a invertir en el CDT: ")
// leer (cantidad)

// imprimir ("Ingrese en dias el periodo a inveritir")
// leer (periodo)

// imprimir ("Ingrese el porcentaje: ")
// leer (porcentajeInteres)

// valorIntereses = (cantidad ∗ porcentajeInteres/100 ∗ periodo)/360

// retencionInteres = valorIntereses * 0.07 

// valorTotal =  valorIntereses - retencionInteres

// imprimir ("El CDT genero la cantidad de: " valorIntereses)
// imprimir ("La retencion por concepto de fuente es de: " retencionInteres)
// imprimir ("El total a pagar es por: " valorTotal)

// Fin INTERESCDT

let cantidad = parseFloat ( prompt (`Ingrese la cantidad a invertir en el CDT: `) );
let periodo = parseInt ( prompt (`Ingrese el pediodo en numero de días a invertir:`) );
let porcentajeInteres = parseFloat ( prompt (`Ingrese el porcentaje de interes al cual se invertira:`));

const valorInteres = ( cantidad * porcentajeInteres/100 + periodo ) / 360;
const retencionInteres = valorInteres * 0.07;
const valorTotal = valorInteres - retencionInteres;

console.log (`El CDT genero la cantidad de: ${valorInteres.toFixed(3)}`);
console.log(`La retencion por concepto de fuente es de: ${retencionInteres.toFixed(3)}`);
console.log(`El total a pagar es de: ${valorTotal.toFixed(2)}`);
