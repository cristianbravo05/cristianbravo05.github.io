export class Producto {
    _id?: number;
    nombre: string;
    categoria: string;
    ubicacion: string;
    precio: number;
    image: string;

    constructor(nombre: string, categoria: string, ubicacion: string, precio: number, image: string ){
        this.nombre = nombre;
        this.categoria = categoria;
        this.ubicacion = ubicacion;
        this.precio = precio;
        this.image = image;

    }
}


