//Mantinene toda la informacion en un solo objeto 

//Metodos de propiedad
const reproductor  = {
    reproducir : function(id){
        console.log(`Reproduciendo cancion con el ID: ${id}`)
    },
    pausar: function(){
        console.log('Pausando...')
    }, 
    crearPlaylist: function(nombre){
        console.log(`Creando playlist: ${nombre}`)
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo playlist: ${nombre}`)
    }
}

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion: ${id}`)
}
reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(15);
reproductor.crearPlaylist("TUMBADITOS");
reproductor.reproducirPlaylist("TUMBADITOS");


