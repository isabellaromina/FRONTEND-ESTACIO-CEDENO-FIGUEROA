import { Injectable } from '@angular/core';
import { HttpClient,  HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../Models/usuario';  
import { environment } from '../../Environments/environment'; 
 

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Usuario/'

  constructor(private http: HttpClient) { }


  FiltroUsuarios(cedula?: string, apellidos?: string, id?: number): Observable<Usuario[]> {
    let params = new HttpParams();
    
    if (cedula) {
      params = params.set('cedula', cedula);
    }
    if (apellidos) {
      params = params.set('apellidos', apellidos);
    }
    if (id !== undefined && id !== null) {
      params = params.set('id', id.toString());
    }

    return this.http.get<Usuario[]>(`${this.myAppUrl}${this.myApiUrl}`, { params });
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addUsuario(usuario: Usuario): Observable<number> {
    return this.http.post<number>(`${this.myAppUrl}${this.myApiUrl}`, usuario);
  }

  updateUsuario(id: number, usuario: Usuario): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, usuario);
  }
  
  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

}
