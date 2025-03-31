//Sirve para revisar multiples condiciones que leer
//Se tiene que poner la estructura defaul que se ejecutara en caso de que no se seleccione
//alguna de las opciones 

const metodoPago = 'paypal';

switch(metodoPago) {
    case 'Tarjeta':
        console.log('El pago se realiza con tarjeta');
        break;

    case 'Efectivo': 
    console.log ('El pago se realizo en efectivo');
    break;

    case 'paypal': 
    console.log ('El pago se realizo mediante paypal');
    break;


    default:
        console.log('Aun no has pagago');

}