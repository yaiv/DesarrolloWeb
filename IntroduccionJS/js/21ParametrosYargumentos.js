//Los parametros se pasaran el los parentesis donde se define la funcion 

function sumar (numero1 = 0, numero2 = 0) { //numero1 y numero2 son parametros
    console.log(numero1 + numero2);
}
sumar(10, 10); //Argumentos o valores reales 
sumar(3, 3);
sumar(3, 6);
sumar(1, 2);

const sumar2 = function (n1, n2) {
   console.log(n1 + n2)
}

sumar2(5, 10);

//Parametros por defauld es utili si solo se quiere un solo numero 
// Se llama solo una funcion que no contiene los argumentos qu se requieren 

    //Ejemplo 
    //function sumar (numero1 = 0, numero2 = 0) 
    //sumar (10, 5)
    //sumar (3)
    //Es util si no se tiene los dos parametros 