import { Injectable } from '@angular/core';
import { Cargas } from '../interfaces/cargas';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Carga } from '../classes/carga';
import Domain from '../../../src/config';

@Injectable({
  providedIn: 'root'
})
export class CargasService {

  constructor(private http: HttpClient) { }

  getAllCargas(): Observable<Cargas[]> {
    return this.http.get<Cargas[]>(`${Domain}/cargas`);
  }

  insertCarga(carga: Carga) {
    return this.http.post<any[]>(`${Domain}/cargas`, carga);
  }

  getCarga(idCarga: string): Observable<any> {
    return this.http.get<any>(`${Domain}/cargas/` + idCarga);
  }

  updateCarga(idCarga, updatedCarga): Observable<any> {
    return this.http.put(
      `${Domain}/cargas/` + idCarga,
      updatedCarga
    );
  }

  deleteCarga(idCarga): Observable<any> {
    return this.http.delete<any>(`${Domain}/cargas/` + idCarga);
  }

}
