import { Genero } from './genero'; 
import { Rol } from './rol';

export interface Usuario {
    id?: number;
    cedula: string;
    apellidos: string;
    telefono: string;
    direccion: string;
    fechaInicio?: Date;
    genero?: Genero;
    rolId?: number;
}

export interface UsuarioConRol extends Usuario {
  nombreRol?: string; // Añadir la propiedad nombreRol
}
