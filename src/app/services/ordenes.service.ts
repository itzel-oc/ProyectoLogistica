import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOrden } from '../interfaces/orden';
import { Orden } from '../classes/orden';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(private http: HttpClient) { }

  getAllOrdenes(): Observable<IOrden[]> {
    return this.http.get<IOrden[]>("http://localhost:3000/ordenes");
  }

  insertOrden(orden: Orden) {
    return this.http.post<Orden>("http://localhost:3000/ordenes", orden);
  }

  updateOrden(idOrden, updatedOrden): Observable<any> {
    return this.http.put(
      "http://localhost:3000/ordenes/" + idOrden,
      updatedOrden
    );
  }

  getOrden(idOrden: string): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/ordenes/${idOrden}`);
  }

  deleteOrden(idOrden): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/ordenes/${idOrden}`);
  }

}
