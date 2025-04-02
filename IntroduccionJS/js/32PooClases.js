//Clases 
//Siempre el nombre de la clase en mayuscula 

//Estructura de la clase
class Producto {  //inicio clase 
    constructor  (nombre, precio) {//inicio de constructor 
        this.nombre = nombre;
        this.precio = precio; 
    } //fin de constructor
    
    formatearProducto(){ //inicio de metodo
        return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }  //fin de metodo


}//fin de la clase 


const producto2 = new Producto ('raton', 100);
const producto3 = new Producto ('lapicero', 20);

console.log(producto2);
console.log(producto3);
console.log(producto2.formatearProducto());


//Pasos para elaborar clase en JS 

    //¿Qué es una clase?
//Una clase en JavaScript es como una "plantilla" que define cómo deben ser los objetos. Piensa en una clase como el molde para hacer galletas; define la forma, pero cada galleta puede tener diferentes decoraciones (valores).

//      ***  PASOS ***

/*
NOMBRAR LA CLASE:
El nombre de la clase debe comenzar con letra mayúscula por convención. Ejemplo: Producto

DEFINIR LA ESTRUCTURA DE LA CLASE
Se utiliza la palabra clave class seguida del nombre de la clase. Luego se abren llaves {}.

CREAR EL CONSTRUCTOR 
Un constructor es un método especial dentro de la clase que define cómo se "crea" o inicializa un objeto.

En este caso, usamos constructor(nombre, precio) para definir que cada objeto tendrá un nombre y un precio.

Se usa this para asignar valores a las propiedades del objeto (como this.nombre).


AGREGAR METODOS 
Un método es una función dentro de la clase que realiza alguna acción. Por ejemplo, formatearProducto() genera un mensaje que describe el producto.

CREAR OBJETOS CON LA CLASE 
Para usar la clase, se utiliza la palabra clave new para crear objetos.
Ejemplo: cosnt producto2 = new Producto('raton', 100);

USAR LOS METODOS DEL OBJETO 
Se accede a los métodos con nombreObjeto.nombreMetodo() . Por ejemplo, .
producto2.formatearProducto().
*/ 


// Ejemplo de otras clases 

class Casa {
    constructor (metroCuadrado, direccion, disponibilidad){
        this.metroCuadrado = metroCuadrado;
        this.direccion = direccion;
        this.disponibilidad = disponibilidad;
    }
    //va metodo
    descripcionCasa () {
        return `La casa tiene las dimensiones de ${this.metroCuadrado}m^2, ubicada en ${this.direccion}, su disponibilidad de compra es ${this.disponibilidad}`;
    }

}

const casa1 = new Casa (2500, 'Av. Aspirante num 3000', true);

console.log(casa1);
console.log(casa1.descripcionCasa());


//otro ejemplo 
// carro 

class Carro {
    constructor (motor, transmision, cajacambios, frenos){
        this.motor = motor;
        this.transmision = transmision;
        this.cajacambios = cajacambios;
        this.frenos = frenos;
    }
    descripcionCarro () {
        return `El vehiculo cuenta con motor ${this.motor}, su transmicion es ${this.transmision}, tiene una caja de cambios ${this.cajacambios} y frenos con tecnologia ${this.frenos}`
    }
}

const carro1 = new Carro ('v6', 'Automatica', 'estandar', 'abs');

console.log(carro1.descripcionCarro());


//Herencia 
// se hace mediante extends para heredar el metodo que se tiene en la clase Producto 
//Para evitar duplicar codigo se hace uso de super en el cual se elige los atributos que se heredan y se sigue utilizando this para el isbn 
//Al llamar al metodo se utiliza formatearProducto por que se esta heredando y se le integra el super + nuevos atributos que sera el ISBN 
//Se manda a llamar de la manera libro.formatearProducto ()


class Libro extends Producto{
    constructor (nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto() } y su ISBN es ${this.isbn}`;

    }
}

const libro = new Libro ('JavaScript la revolucion', 120, '151315151');

console.log(libro.formatearProducto() );

