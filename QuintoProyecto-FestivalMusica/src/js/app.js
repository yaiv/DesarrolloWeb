document.addEventListener('DOMContentLoaded', function() {
    navegacionFija()
    crearGaleria()
    resaltarEnlace()
    scrollNav()

})

function scrollNav(){
    const navLinks = document.querySelectorAll('.navegacion-principal a')

    navLinks.forEach(link => {
        link.addEventListener('click', e =>{
            e.preventDefault()

            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)
            console.log(section)

            section.scrollIntoView({behavior: 'smooth'})
        })
    })

}

function resaltarEnlace(){
    //util con one-page-website
    //Cuando haces scroll por la página, va detectando qué sección del sitio estás viendo y le agrega una clase active al <a> correspondiente en el menú de navegación.

        // Escucha el evento de scroll en la página
    document.addEventListener('scroll', function(){ //Cada vez que el usuario hace scroll, se ejecuta esta función

        const sections = document.querySelectorAll('section') //Selecciona todos los elementos section ya que se tienen sus propios id 
        const navLinks = document.querySelectorAll('.navegacion-principal a') //Se selecciona todos los enlaces a con clase 

        let actual = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop //offsetTop: dice a qué altura está la sección desde arriba de la página.
            const sectionHeight = section.clientHeight  //clientHeight: cuánta altura ocupa esa sección. 

            if (window.scrollY >= (sectionTop - sectionHeight / 3)){ //Si ya has hecho scroll y estás dentro de una sección (al menos un tercio de su altura), entonces actualiza actual con el id de esa sección
                actual = section.id //actual guarda el ID de la sección actualmente visible.
            }
        })

        navLinks.forEach(link => { //se recorre cada enlace del menú
            link.classList.remove('active') //Se quita la clase active a todos primero.

            if(link.getAttribute('href') === '#' + actual){ //Luego se la agrega solo al que apunta a la sección que estás viendo
                link.classList.add('active')
            }
        })
    })

}

function navegacionFija (){
    //se selecciona
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')

    //escuchar cuando el usuario realice scroll por el documento 
    window.addEventListener('scroll', function(){
      //  console.log( sobreFestival.getBoundingClientRect().bottom )  //se utiliza objeto + metodo, que mide las distancias, en este caso de la ventana 
        
      //perite ver si ya se dio el suficiente scroll
      if ( sobreFestival.getBoundingClientRect().bottom < 1){
         header.classList.add('fixed')        
        //console.log('ya lo pasaste...')
      }else {
        // console.log('aun no...')
        header.classList.remove('fixed')        

      }
    })

}

function crearGaleria(){
    const CantidadImagenes = 16;
    const galeria = document.querySelector('.galeria-imagenes')
    //se generan el html de 16 imagenes vacias
    for(let i = 1; i <= CantidadImagenes; i++) {
        const imagen = document.createElement('PICTURE')  
                //Se mejora performance
                imagen.innerHTML = `
                <source srcset="build/img/gallery/thumb/${i}.avif" type="image/avif">
                <source srcset="build/img/gallery/thumb/${i}.webp" type="image/webp">
                <img loading="lazy" width="200" height="300" src="build/img/gallery/thumb/${i}.jpg" alt="imagen galeria">
            `;

        // //se inyecta atributo de la ubicacion de la imagen 
        // imagen.src = `src/img/gallery/thumb/${i}.jpg`
        // imagen.alt = 'imagen galeria'

        //Event Handler -Detecta y responder a una interaccion del usuario 
        //detectar interaccion del usuario con las imagenes 
        imagen.onclick = function(){
            mostrarImagen(i); //se valida cual fue la imagen clikeada por el indice 
        }

        //Se agregan imagenes
        galeria.appendChild (imagen)
    }
}

function mostrarImagen(i) {
    // console.log('desde mostrarImagen', i) se valida en consola entrada de indice mediante la funcion

    //se genera imagen 
        const imagen = document.createElement('PICTURE')  
        // //se inyecta atributo de la ubicacion de la imagen 
        // imagen.src = `src/img/gallery/full/${i}.jpg`
        // //Se inyecta texto alternativo
        // imagen.alt = 'imagen galeria'

        imagen.innerHTML = `
    <source srcset="build/img/gallery/full/${i}.avif" type="image/avif">
    <source srcset="build/img/gallery/full/${i}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/gallery/full/${i}.jpg" alt="imagen galeria">
`;

    //se genera modal 
    const modal = document.createElement('DIV') //se genera div
    modal.classList.add('modal') //se le genera clase modal para darle estilos en sass
    //cierre de modal 
    modal.onclick = cerrarModal  //No toma nada por ello solo el nombre de la funcion 
    //console.log(modal)

    //Botón cerrar modal 
    const cerrarModalBtn = document.createElement('BUTTON')
    cerrarModalBtn.textContent = 'X'
    cerrarModalBtn.classList.add('btn-cerrar')
    cerrarModalBtn.onclick = cerrarModal  //Se llama a la misma funcion 

    //Agregar elementos a modal
    modal.appendChild(imagen)
    modal.appendChild(cerrarModalBtn)

    //agregar al html 
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden') //se genera clase para evitar scroll
        body.appendChild(modal)
}

function cerrarModal(){
        //se elimana modal con un click mas 
        const modal = document.querySelector('.modal')
        //Animacion que desaparece la imagen
        modal.classList.add('fade-out')


        //Se retrasa el cerrie despues de seleccionar nuevamente modal 
        //Se recupera scroll eliminando clase overflor-hidden
        setTimeout(() => {
            modal?.remove()
            
            const body = document.querySelector('body')
            body.classList.remove('overflow-hidden') //se elimina clase para poder realizar scroll

        }, 500);
}