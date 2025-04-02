/* Fetch API es el nuevo estandar 

permite enviar informacion al servidos u obtener informacion de un servidor

Se puede obtener un archivo local o una respuesta de un servidor (texto o json)

Utiliza ormises o async away

JSON: JavaScript  Object Notation 
Es un lenguaje de transporte de datos 
Un json se puede crear en cualquier lenguaje y se puede consumir en JS por medio de Fetch API
y mostrar resultados en sitio web 
*/


// function obtenerEmpleados() {
//     const archivo = 'empleados.json';

//     fetch (archivo)
//     .then(resultado => resultado.json())
//     .then (datos => {
//         console.log(datos);
//      })
// }
// obtenerEmpleados();


//Con Async Await 

async function obtenerEmpleados() {
    const archivo = 'empleados.json';

    const resultado = await fetch ( archivo );
    const datos = await resultado.json();
    console.log(datos);
}
obtenerEmpleados();