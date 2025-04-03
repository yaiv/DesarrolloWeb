//JS permite manipular los elementos del html 

//querySelector

// const heading = document.querySelector('.header__texto h2');
// console.log(heading);

// te retorna cero o maximo un elemento
//Si te equivocas en el selector quedara null  


//querySelectorAll 

const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces)

//Va a retornar todos los que concuerden con ese selector especificado 
// Para acceder a alguno en especifico es como con los arreglos ej: [0]
//Se ueden modificar 
// const enlaces = document.querySelectorAll('.navegacion a');
// enlaces[0].textContent = 'Nuevo texto para enlace'
//enlaces[0].classList.add('nueva-clase');  Se genera nueva clase 
//enlaces[0].classList.remove('navegacion__enlace'); Se elimina clase 

8
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

const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento) {
    console.log(evento);
    evento.preventDefault();
    console.log('enviando formulario')

});

//Eventos de los inputs y textarea

//Se genera objeto de datos de los formularios 

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

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

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// function leerTexto () {
//     console.log('EscribiendoTexto')
// }

//Para pasar el evento solo se hace con la letra e en la funcion creada 
function leerTexto (e) {
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    console.log(e.target);
    console.log(datos);
}

//Eventos de click y eventos de input 