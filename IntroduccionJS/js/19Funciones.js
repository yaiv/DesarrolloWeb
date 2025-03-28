//Funciones 

// serire de procedimientos o instrucciones que realizan alguna accion y son reutilizables 

//Declaracion de funcion 
//funtion + nombre de la funcion + argumentos de la funciuon () + cuerpo de la funcion {...todas las acciones d ela funcion }
sumar();
function sumar () {
    console.log(10 + 10);
}


//Expresion de la funcion 
sumar2();
const sumar2 = function () {
    console.log(3 + 3)
}

sumar2()  //se manda a llamar 

//IIFE
//SE MANDA A LLAMAR ELLA MISMA 

(function() {
    console.log('Esto es una funcion');
})();

//JS se ejecuta en dos etapas la primera es la de registro o la de creacion 
//y la segunda es la ejecucion que es donde se ejecuta el codigo 

//En el primer ejemplo el codigo si se ejecuta ya que se declara la funcion 
sumar();
function sumar() {
    console.log(10 + 10);
}

//Aqui el codigo no se ejecuta debido debido al hoisting  
//Se podria considerar como una variable 
sumar2();
const sumar2 = function() {
    console.log( 3 + 3 );
}

