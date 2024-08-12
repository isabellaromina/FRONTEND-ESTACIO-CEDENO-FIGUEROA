import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../Environments/environment';
import { OrdenCompra } from '../Models/OrdenCompra';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Orden/';

  constructor(private http: HttpClient) {}

  mostrarOrdenes(): Observable<OrdenCompra[]> {
    return this.http.get<OrdenCompra[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  obtenerOrdenPorId(id: number): Observable<OrdenCompra> {
    return this.http.get<OrdenCompra>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  agregarOrden(orden: OrdenCompra): Observable<number> {
    return this.http.post<number>(`${this.myAppUrl}${this.myApiUrl}`, orden);
  }

  modificarOrden(orden: OrdenCompra): Observable<number> {
    return this.http.put<number>(`${this.myAppUrl}${this.myApiUrl}${orden.id}`, orden);
  }

  eliminarOrden(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }
}