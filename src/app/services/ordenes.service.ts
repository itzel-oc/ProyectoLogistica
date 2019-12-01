import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOrden } from '../interfaces/orden';
import { Orden } from '../classes/orden';
import Domain from '../../../src/config';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(private http: HttpClient) { }

  getAllOrdenes(): Observable<IOrden[]> {
    return this.http.get<IOrden[]>(`${Domain}/ordenes`);
  }

  insertOrden(orden: Orden) {
    return this.http.post<Orden>(`${Domain}/ordenes`, orden);
  }

  updateOrden(idOrden, updatedOrden): Observable<any> {
    return this.http.put(
      `${Domain}/ordenes/` + idOrden,
      updatedOrden
    );
  }

  getOrden(idOrden: string): Observable<any> {
    return this.http.get<any>(`${Domain}/ordenes/${idOrden}`);
  }

  deleteOrden(idOrden): Observable<any> {
    return this.http.delete<any>(`${Domain}/ordenes/${idOrden}`);
  }

}
