//El codigo se ejecuta de arriba hacia abajo 
//Pero abra momentos en que primero se tiene que revisar alguna parte especifica del codigo 

//Es decir revisar que una condicion se cumpla o no mediante la palabra if 
//Si la condicion no se cumple se ejecuta else 
//Se debe de tener atencion con los comparadores existe 
// === que valida que el valor sea el mismo y tambien verifica el tipo de dato
// !== Difente de 
// > mayoe que
// < menor que 

const puntaje = 1000;
if (puntaje == 1000){
    console.log ('Si el puntaje es 1000');
} else {
    console.log('No es igual')
}

const efectivo = 1000;
const carrito = 800;

if ( efectivo > carrito) {
    console.log('El usuario cuenta con fondos');
} else {
    console.log ('El usuario no cuenta con fondos')
}

//Se puede utializar la estructura  else if para hacer otras verificaciones 
//No abusar de su uso ya que se puede ver muy cargado el codigo y conviene usar switch
// else if va despies del if pero antes que else  

const rol = 'User'

if (rol === 'User') {
    console.log('Tienes acceso al sistema');
}
//else if  
else if ( rol === 'Editor' ){
    console.log ('Tienes acceso como editor')

} else {
    console.log('No tienes acceso,verifica rol');
}