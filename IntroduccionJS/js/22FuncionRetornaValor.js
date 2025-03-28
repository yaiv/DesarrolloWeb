function sumar(n1, n2){
    return n1 + n2;
}

const resultado = sumar(2,3);

console.log(resultado);


let total =0;

function agregarCarrito (precio) {
    return total += precio;
}

function calcularImpuesto (total){
    return 1.15 * total;
}

total=agregarCarrito(200);
total=agregarCarrito(400);
total=agregarCarrito(600);

console.log(total);

const totalAPagar = calcularImpuesto(total);
console.log(totalAPagar)  

//Se agrega templete string para poner el texto de abajo 
console.log(`El total a pagar con impuestos es de: ${totalAPagar} `)

//Son utiles las funciones que retornan un vaor ya que en el ejemplo se construye 
//total y despues se calcula impuesto con el valor retornado de total

