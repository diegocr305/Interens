export class Producto {


    constructor(
        public id: number,
        public nombre: string,
        public descripcion: string,
        public precio: number,
        public stock: number,
        public imagenSrc: string, // Agregamos el atributo imagenSrc de tipo string
    ) {
    }
}