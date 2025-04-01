//This  ** Los objetos tambien pueden tener funciones 

//Hace referencia al objeto sobre el cual se estan mandando a llamar la funcion 
//Hace referencia al mismo objeto, a los mismos valores del objeto que se esta llamando en la funcion 
//No se puede utilizar arrow fuction a menos que se encuentre en la ventana global, si se ocupa sin que este en ventana global  sera undifile 

//Y es mas util this ya en esta caso hace referencia a las propiedades del objeto sobre el cual se esta ejecutando esa funcion


const reservacion = {
    nombre: 'Yair',
    apellido: 'Guerra Morales',
    total: 5000,
    pagado: false,

    informacion: function () {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`)
    }
}

reservacion.informacion();