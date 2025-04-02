// 

const usuarioAutenticado = new Promise ( (resolve, reject )=>{
    const auth = false;

    if(auth){
        resolve('Usuario autenticado'); //El promise SE CUMPLE 

    }else {
        reject ('Usuario no autenticado');  //El promise no se cumple 
    }
});

usuarioAutenticado
    .then( function(resultado){
        console.log(resultado)
    } )
    .catch( function(error) {
        console.log (error)
    } )

    //tambien se puede excribir con arrow function
    // usuarioAutenticado
    //     .then(  (resultado) => console.log(resultado))
    //     .catch( (error) =>console.log(error))


//en los primises existen 3 valores 

// Peding: no se ha cumplido pero tampoco se ha rechazado
// Fulfilled: Ya se cumplio
// Rejected: Se ha rechazado o no se pudo cumplir 

