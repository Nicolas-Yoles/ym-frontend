export class Album {
    nombre: string;
    imagen: string;
    fec_creacion: Date;
    constructor(
        nombre?: string,
        imagen?: string,
        fec_creacion?: Date,
    ){
        this.nombre = nombre;
        this.imagen = imagen;
        this.fec_creacion = fec_creacion;
    }
}
