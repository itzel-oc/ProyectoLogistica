import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IRuta } from "../interfaces/ruta";
import { Observable } from "rxjs";
import { Ruta } from "../classes/ruta";
import Domain from '../../../src/config';
@Injectable({
  providedIn: "root"
})
export class RutasService {
  constructor(private http: HttpClient) {}

  getAllRutas(): Observable<IRuta[]> {
    return this.http.get<IRuta[]>(`${Domain}/rutas`);
  }

  insertRuta(ruta: Ruta) {
    return this.http.post<any[]>(`${Domain}/rutas`, ruta);
  }

  getRuta(idRuta: string): Observable<any> {
    return this.http.get<any>(`${Domain}/rutas/` + idRuta);
  }

  updateRuta(idRuta, updatedRuta): Observable<any> {
    return this.http.put(`${Domain}/rutas/` + idRuta, updatedRuta);
  }

  deleteRuta(idRuta) {
    return this.http.delete(`${Domain}/rutas/` + idRuta);
  }
}
