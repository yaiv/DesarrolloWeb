//Se manda a llamar css desde el gulp 
import { src, dest, watch, series } from 'gulp' //series permite ejecutar una tarea tras otra 
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

//se procesa JS a traves de gulp
export function js( done ) { //toma copia del archivo js y lo lleva hacia build
    
    src('src/js/app.js') //se ubica el archivo
        .pipe( dest('build/js'))//se lleva a build

    done()
}

export function css ( done ) {
    src('src/scss/app.scss', {sourcemaps: true}) //Se habilita archivo para ruta de app.css con direccion en sass a traves de gulp
        .pipe( sass() .on('error', sass.logError ) ) //Se verifica error tras eliminar build
        .pipe( dest('build/css', {sourcemaps: true}) )

    done()
}

//Busqueda de todos los archivos con extension .scss para que se 
//genere la compilacion en app.css
export function dev() {
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', js) //se genera watch para js  

}


export default series( js, css, dev)

/*
Instalacion de gulp y primera compilacion ya con modo watch 


export function hola( done ){
    console.log('Hola desde gulpfile.js');

    done()
}

se corrio en terminal con npm run hola 
*/