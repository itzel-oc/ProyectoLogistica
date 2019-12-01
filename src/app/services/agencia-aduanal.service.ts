import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Domain from '../../../src/config';

@Injectable({
  providedIn: 'root'
})
export class AgenciaAduanalService {

  constructor(private http: HttpClient) { }

  getAllAgenciasAduanales(): Observable<any> {
   return this.http.get<any>(`${Domain}/agenciaAduanal`);
  }

  getAgenciaAduanal(id: any): any {
    return this.http.get<any>(`${Domain}/agenciaAduanal/${id}`);
  }

  insertAgenciaAduanal(agencia): Observable<any> {
    return this.http.post<any>(`${Domain}/agenciaAduanal`, agencia);
  }


}
