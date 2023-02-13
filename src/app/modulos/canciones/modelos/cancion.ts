export class Cancion {
    nombre: string;
    fechaCreacion: Date;
    duracion: number;
    constructor(
        nombre?: string, 
        fechaCreacion?: Date,
        duracion?: number,
        ){
        this.nombre=nombre; 
        this.fechaCreacion=fechaCreacion;
        this.duracion = duracion}
}
