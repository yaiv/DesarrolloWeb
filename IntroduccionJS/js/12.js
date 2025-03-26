//Modificar OBJETOS 

const producto ={
    nombreProducto : "Monitor 20 pulgadas", 
    precio : 300,
    disponible : true
}

console.log(producto)

//Agregar nuevas propiedades 
producto.imagen = 'imagen.jpg';

//eliminar propiedades 
delete producto.disponible;
