export class DatosPersona{
    cedula:string;
    apellidos:string;
    telefono:string;
    fechaInicio:Date;
    direccion:string;
    genero:string;

    constructor(cedula:string,apellidos:string,telefono:string,fechaInicio:Date,direccion:string, genero:string){
            
        this.cedula=cedula;
        this.apellidos=apellidos;
        this.telefono=telefono;
        this.fechaInicio=fechaInicio;
        this.direccion=direccion;
        this.genero=genero;
      
    }

}