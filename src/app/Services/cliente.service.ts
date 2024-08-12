import { Injectable } from '@angular/core';
import { environment } from '../../Environments/environment';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private myAppUrl : string = environment.endpoint;
  private myApiUrl : string = 'api/Cliente/'

  constructor(private http : HttpClient) { }

obtenerClientePorId(id: number): Observable<Cliente> {
  return this.http.get<Cliente>(`${this.myAppUrl}${this.myApiUrl}${id}`);
}

mostrarCliente() : Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.myAppUrl}${this.myApiUrl}`);
}

agregarCliente(cliente : Cliente) : Observable<number>{
return this.http.post<number>(`${this.myAppUrl}${this.myApiUrl}`, cliente);
}


eliminarCliente(id: number): Observable<void>{
  return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
}

modificarCliente(datos : Cliente): Observable<number>{
  return this.http.put<number>(`${this.myAppUrl}${this.myApiUrl}${datos.id}`,datos);
}
}