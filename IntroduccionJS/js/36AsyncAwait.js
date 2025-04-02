//Async   /Await 

// Se tienene entidades diferentes y una no depende de otra 

// function descargarNvoClientes () {
//     return new Promise ( resolve => {
//         console.log('Descargando clientes... espere...');

//         setTimeout ( () => {
//             resolve('Los clientes fueron descargados');
//         }, 5000);

//     } );
// }


// function descargarUltPedidos () {
//     return new Promise ( resolve => {
//         console.log('Descargando pedidos... espere...');

//         setTimeout ( () => {
//             resolve('Los pedidos fueron descargados');
//         }, 3000);

//     } );
// }

// async function app() {
//     try {
//         const clientes = await descargarNvoClientes();
//         const pedido = await descargarUltPedidos();
//         console.log(clientes);
//         console.log(pedido);
//     } catch (error) {
//         console.log(error);
//     }
// }

// app();


// setTimeout(function () {
//     console.log('set timeout...')
// }, 5000);

// //setTimeout 
// //setInterval 




// Dos consultas Async Await

function descargarNvoClientes () {
    return new Promise ( resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout ( () => {
            resolve('Los clientes fueron descargados');
        }, 5000);

    } );
}


function descargarUltPedidos () {
    return new Promise ( resolve => {
        console.log('Descargando pedidos... espere...');

        setTimeout ( () => {
            resolve('Los pedidos fueron descargados');
        }, 3000);

    } );
}

async function app() {
    try {
        // const clientes = await descargarNvoClientes();
        // const pedido = await descargarUltPedidos();
        // console.log(clientes);
        // console.log(pedido);

        const resultado = await Promise.all([descargarNvoClientes(), descargarUltPedidos() ]);
        console.log(resultado)
    } catch (error) {
        console.log(error);
    }
}

app();
