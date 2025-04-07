// se obtendrıan 4 notas parciales durante el semestre y que, la nota deFin itiva para la asignatura serıa la media aritmetica de esas 4 notas. ¿Cual es la nota deFin itva?
// 					---Suponga que, para el algoritmo del calculo de la nota deFin itiva expuesto en el Ejemplo 2.4, el acuerdo al que llegaron profesor y
// 					   estudiantes consiste en darle un porcentaje a cada una de las 4 notas, de la siguiente manera:
// 					   Primera: 15 % 
// 					   Segunda: 15 %
// 					   Tercera: 30 %
// 					   Cuarta: 40 % 

let cal1 = parseFloat(prompt(`Introduce la primera calificacion:`));
let cal2 = parseFloat(prompt(`Introduce la segunda calificacion:`));
let cal3 = parseFloat(prompt(`Introduce la tercera calificacion:`));
let cal4 = parseFloat(prompt(`Introduce la cuarta calificacion:`));

let calFinal = (cal1 * 0.15) + (cal2 * 0.15) + (cal3 * 0.30) + (cal4 * 0.40);

console.log (`La calificacion final es ${calFinal.toFixed(2)}`);

