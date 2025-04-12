//Se manda a llamar css desde el gulp 
import { src, dest, watch } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

export function css ( done ) {
    src('src/scss/app.scss')
        .pipe( sass() )
        .pipe( dest('build/css') )

    done()
}


export function dev() {
    watch('src/scss/app.scss', css)
}


/*
Instalacion de gulp y primera compilacion ya con modo watch 


export function hola( done ){
    console.log('Hola desde gulpfile.js');

    done()
}

se corrio en terminal con npm run hola 
*/