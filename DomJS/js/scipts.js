//JS permite manipular los elementos del html 

//querySelector

// const heading = document.querySelector('.header__texto h2');
// console.log(heading);

// te retorna cero o maximo un elemento
//Si te equivocas en el selector quedara null  


//querySelectorAll 

// const enlaces = document.querySelectorAll('.navegacion a');
// console.log(enlaces)

//Va a retornar todos los que concuerden con ese selector especificado 
// Para acceder a alguno en especifico es como con los arreglos ej: [0]
//Se ueden modificar 
// const enlaces = document.querySelectorAll('.navegacion a');
// enlaces[0].textContent = 'Nuevo texto para enlace'
//enlaces[0].classList.add('nueva-clase');  Se genera nueva clase 
//enlaces[0].classList.remove('navegacion__enlace'); Se elimina clase 


//getElementBy 

const heading2 = document.getElementById('heading');
console.log(heading2);

// Generar un nuevo enlace 
//con HTML
//En las comullas van las etiquetas que se desean crear 
const nuevoEnlace = document.createElement('A');

//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html'

//agragar texto 
nuevoEnlace.textContent = 'Un nuevo enlace'

//agregar la clase 
nuevoEnlace.classList.add('navegacion__enlace')

//Agregarlo al documento

// const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(nuevoEnlace) //funcio que permite agregar al hijo


// console.log(nuevoEnlace)



//forma tradicional 
//<a href="nosotros.html" class="nuevo-enlace">Nosotros</a>


//Eventos al reaccionar a clicks en javaScript
//Se genera de manera automatica o por cause delusuario 
//Siempre que se tenga un evento aociado se identificara por addEventListener  y una vez que ocurra el evento el codigo siguiente se ejecuta 

// //Eventos
// console.log(1);
// window.addEventListener('load', function(){  //load espera a que el JS y los archivos que dependen del HTML esten listos 
//     console.log(2);
// });
// window.onload = function() {
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function(){       //Solo espera por el HTML, pero no espera CSS o imagenes 
//     console.log(4)
// });

// console.log(5);

// window.onscroll = function(evento) {
//     console.log(evento)
// }




//Seleccionar elementos y asociarles eventos 
//ESTA ASOCIADO A CUALQUIER ELEMENTO, NO COMO EN submit que esta para el formulario

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault();
//     console.log('enviando formulario')

// });

//Eventos de los inputs y textarea

//Se genera objeto de datos de los formularios 

// const datos = {
//     nombre: '',
//     email: '',
//     mensaje: ''
// }

//AL USAR QUERYSELECTOR SE TIENE DISPONIBLE ADDEVENTLISTER 
// const nombre = document.querySelector('#nombre');
// const email = document.querySelector('#email');
// const mensaje = document.querySelector('#mensaje');

// nombre.addEventListener('input', function(e){
//     console.log(e.target.value)
// })

// email.addEventListener('input', function(e){
//     console.log(e.target.value)
// })

// mensaje.addEventListener('input', function(e){
//     console.log(e.target.value)
// })


//tambien se puede realizar a traves de una funcion para simplificar codigo 

// const nombre = document.querySelector('#nombre');
// const email = document.querySelector('#email');
// const mensaje = document.querySelector('#mensaje');

// nombre.addEventListener('input', leerTexto);
// email.addEventListener('input', leerTexto);
// mensaje.addEventListener('input', leerTexto);

// // function leerTexto () {
// //     console.log('EscribiendoTexto')
// // }

// //Para pasar el evento solo se hace con la letra e en la funcion creada 
// function leerTexto (e) {
//     // console.log(e.target.value);

//     datos[e.target.id] = e.target.value;

//     console.log(e.target);
//     console.log(datos);
// }

// //Eventos de click y eventos de input 

// //EVENTOS EN EL FORMULARIO 

// //EVENTO submit   para formularios 
// const formulario = document.querySelector('.formulario')
// formulario.addEventListener('submit', function(evento) {
//     evento.preventDefault();
//     console.log('Enviando Formularios')
// })


// Como organizar el codigo JS 
// variables en la parte superior 
// despues todos los addEventListener
// Y luego las funciones


//Ejemplo correcto 

// const datos = {
//     nombre: '',
//     email: '',
//     mensaje: ''
// }

// const nombre = document.querySelector('#nombre');
// const email = document.querySelector('#email');
// const mensaje = document.querySelector('#mensaje');
// const formulario = document.querySelector('.formulario');

// nombre.addEventListener('input', leerTexto);
// email.addEventListener('input', leerTexto);
// mensaje.addEventListener('input', leerTexto);

// //El evento de submit 
// formulario.addEventListener('submit', function(evento) {
//     evento.preventDefault();
// });

// //Se valida el formulario 


// //Enviar el formulario 

//     function leerTexto (e) {
//         // console.log(e.target.value);
    
//         datos[e.target.id] = e.target.value;
    
//         console.log(datos);
//     }



// //Se genera validador de formulario

// //Este es un objeto global
// const datos = {
//     nombre: '',
//     email: '',
//     mensaje: ''
// }

// const nombre = document.querySelector('#nombre');
// const email = document.querySelector('#email');
// const mensaje = document.querySelector('#mensaje');
// const formulario = document.querySelector('.formulario');

// nombre.addEventListener('input', leerTexto);
// email.addEventListener('input', leerTexto);
// mensaje.addEventListener('input', leerTexto);

// //El evento de submit 
// formulario.addEventListener('submit', function(evento) {
//     evento.preventDefault();


//     //Se valida el formulario 

//     //Se van a extraer los valores del objeto global 
//     const { nombre, email, mensaje } = datos;

//     console.log(nombre);
//     console.log(email);
//     console.log(mensaje);

//     if ( nombre === '' || email === '' || mensaje === '') {
//         // console.log('Todos los campos son obligatorios');   SE GENERA FUNCION, ya que nadie revisaria la consola de esta manera 

//         mostrarError ('Todos los campos son obligatorios funcion');
//         return; //Corta la ejecucion del codigo si se cumple la condicion que se tiene en el if
//     }


//     //Se crea alerta de Enviar Formulario correctamente 
//     MostrarMensaje('Formulario enviado correctamente fun');
// });



//     function leerTexto (e) {
//         // console.log(e.target.value);
    
//         datos[e.target.id] = e.target.value;
    
//         // console.log(datos);
//     }

// //Muestra alerta de envio correcto de formulario 

// function MostrarMensaje (mensaje) {
//     const alerta = document.createElement('P');
//     alerta.textContent = mensaje

//     //Se genera clase para css 
//     alerta.classList.add('correcto');

//     //Se agrega al documento
//     formulario.appendChild ( alerta );

//     //Desaparezca despues de 5 segundos 
//     setTimeout (() =>{
//         alerta.remove();
//     }, 5000);
// }


// //Muestra error en pantalla por llenado de campos 

// function mostrarError (mensaje) {
//     const error = document.createElement('P');
//     error.textContent = mensaje

//     //Se le agrega clase css
//     error.classList.add('error');

//     //Se agrega al documento
//     formulario.appendChild ( error );

//     //Desaparezca despues de 5 segundos 
//     setTimeout (() =>{
//         error.remove();
//     }, 5000);

// }

//Replicar alerta para reforzar conocimiento 



//REFACTORING DE CODIGO se realiza una vez que el codigo ya funciona, se trata de optimizarlo pero entendiendo lo que se hace  



//Este es un objeto global
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//El evento de submit 
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();


    //Se valida el formulario 

    //Se van a extraer los valores del objeto global 
    const { nombre, email, mensaje } = datos;

    console.log(nombre);
    console.log(email);
    console.log(mensaje);

    if ( nombre === '' || email === '' || mensaje === '') {
        // console.log('Todos los campos son obligatorios');   SE GENERA FUNCION, ya que nadie revisaria la consola de esta manera 

        mostrarAlerta ('Todos los campos son obligatorios fun', true);
        return; //Corta la ejecucion del codigo si se cumple la condicion que se tiene en el if
    }


    //Se crea alerta de Enviar Formulario correctamente 
    mostrarAlerta('Formulario enviado correctamente fun');
});



    function leerTexto (e) {
        // console.log(e.target.value);
    
        datos[e.target.id] = e.target.value;
    
        // console.log(datos);
    }


//Se genera funcion refactoring 

function mostrarAlerta (mensaje, error = null ) {
    const alerta = document.createElement('P');
    alerta.textContent  = mensaje;

    if (error) {
        alerta.classList.add('error');
    }else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    //Desaparezca despues de 5 segundos 
    setTimeout (() =>{
         alerta.remove();
    }, 5000);
}

