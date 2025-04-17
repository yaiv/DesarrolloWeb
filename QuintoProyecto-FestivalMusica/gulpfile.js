//Se importan dependencias para minimizar imagenes 
import path from 'path'
import fs from 'fs'

import { glob } from 'glob'

//Se manda a llamar css desde el gulp 
import { src, dest, watch, series } from 'gulp' //series permite ejecutar una tarea tras otra 
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
//Se importa dependencia para minimizar js 

const sass = gulpSass(dartSass)
import terser from 'gulp-terser'
import sharp from 'sharp'


//se procesa JS a traves de gulp
export function js( done ) { //toma copia del archivo js y lo lleva hacia build
    
    src('src/js/app.js') //se ubica el archivo
        .pipe( terser() ) //Minimiza el codigo js 
        .pipe( dest('build/js'))//se lleva a build

    done()
}

export function css ( done ) {
    src('src/scss/app.scss', {sourcemaps: true}) //Se habilita archivo para ruta de app.css con direccion en sass a traves de gulp
        .pipe( sass({  
            outputStyle: 'compressed' //unifica el codigo de app.css

        }) .on('error', sass.logError ) ) //Se verifica error tras eliminar build
        .pipe( dest('build/css', {sourcemaps: '.'}) ) //se genera archivo externo para el mapeo 191

    done()
}

//Imagenes mas pequeñas para la galeria 
//con codigo node js 
export async function crop(done) {
    const inputFolder = 'src/img/gallery/full'
    const outputFolder = 'src/img/gallery/thumb';
    const width = 250;
    const height = 180;
    if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder, { recursive: true })
    }
    const images = fs.readdirSync(inputFolder).filter(file => {
        return /\.(jpg)$/i.test(path.extname(file));
    });
    try {
        images.forEach(file => {
            const inputFile = path.join(inputFolder, file)
            const outputFile = path.join(outputFolder, file)
            sharp(inputFile) 
                .resize(width, height, {
                    position: 'centre'
                })
                .toFile(outputFile)
        });

        done()
    } catch (error) {
        console.log(error)
    }
}

//imagenes en WebP
export async function imagenes(done) {
    const srcDir = './src/img';
    const buildDir = './build/img';
    const images = await glob('./src/img/**/*.{jpg,png,JPG,PNG}'); // Asegura mayúsculas/minúsculas

    try {
        const promises = images.map(async file => {
            const relativePath = path.relative(srcDir, path.dirname(file));
            const outputSubDir = path.join(buildDir, relativePath);
            await procesarImagenes(file, outputSubDir);
        });
        await Promise.all(promises);
        done(); // Ahora sí, solo se llama cuando todo terminó
    } catch (error) {
        console.error("Error al procesar imágenes:", error.message);
        done(error); // Notifica a Gulp que hubo un error
    }
}

async function procesarImagenes(file, outputSubDir) {
    try {
        if (!fs.existsSync(outputSubDir)) {
            fs.mkdirSync(outputSubDir, { recursive: true });
        }

        const baseName = path.basename(file, path.extname(file));
        const extName = path.extname(file);
        const outputFile = path.join(outputSubDir, `${baseName}${extName}`);
        const outputFileWebp = path.join(outputSubDir, `${baseName}.webp`);
        const outputFileAvif = path.join(outputSubDir, `${baseName}.avif`);

        const options = { quality: 80 };

        await Promise.all([
            sharp(file).jpeg(options).toFile(outputFile),
            sharp(file).webp(options).toFile(outputFileWebp),
            sharp(file).avif().toFile(outputFileAvif)
        ]);
    } catch (error) {
        console.error(`Error procesando ${file}:`, error.message);
        throw error; // para que Gulp pueda atraparlo en `imagenes()`
    }
}


//Busqueda de todos los archivos con extension .scss para que se 
//genere la compilacion en app.css
export function dev() {
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', js) //se genera watch para js  
    watch('src/img/**/*.{png, jpg}', imagenes) //se genera watch para imagenes  

}


export default series(crop, js, css, imagenes, dev)

/*
Instalacion de gulp y primera compilacion ya con modo watch 


export function hola( done ){
    console.log('Hola desde gulpfile.js');

    done()
}

se corrio en terminal con npm run hola 
*/