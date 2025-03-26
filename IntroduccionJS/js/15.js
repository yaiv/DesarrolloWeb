//Unir dos objetos

const producto ={
    nombreProducto : "Monitor 20 pulgadas", 
    precio : 300,
    disponible : true
}

const medida = {
    peso: '1kg',
    medida: '1m'
}

//Para unir los datos de los objetos se recomienda no modificar los datos originales y se hace mediante 
//rest operation

const nuevoProducto = { ...producto, ...medida};  //Se unen dos objewtos pero no se mutan los originales 

console.log(producto);
console.log(nuevoProducto);