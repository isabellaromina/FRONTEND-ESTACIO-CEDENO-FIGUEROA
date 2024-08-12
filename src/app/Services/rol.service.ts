import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol } from '../Models/rol';
import { environment } from '../../Environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/rol/';

  constructor(private http: HttpClient) { }

  getRoles(): Observable<Rol[]> {
    return this.http.get<Rol[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getRol(id: number): Observable<Rol> {
    return this.http.get<Rol>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addRol(rol: Rol): Observable<number> {
    return this.http.post<number>(`${this.myAppUrl}${this.myApiUrl}`, rol);
  }

  updateRol(id: number, rol: Rol): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, rol);
  }

  deleteRol(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }
}
