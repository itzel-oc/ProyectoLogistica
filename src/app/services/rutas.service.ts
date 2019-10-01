import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IRuta } from "../interfaces/ruta";
import { Observable } from "rxjs";
import { Ruta } from "../classes/ruta";

@Injectable({
  providedIn: "root"
})
export class RutasService {
  constructor(private http: HttpClient) {}

  getAllRutas(): Observable<IRuta[]> {
    return this.http.get<IRuta[]>("http://localhost:3000/rutas");
  }

  insertRuta(ruta: Ruta) {
    return this.http.post<any[]>("http://localhost:3000/rutas", ruta);
  }

  getRuta(idRuta: string): Observable<any> {
    return this.http.get<any>("http://localhost:3000/rutas/" + idRuta);
  }

  updateRuta(idRuta, updatedRuta): Observable<any> {
    return this.http.put("http://localhost:3000/rutas/" + idRuta, updatedRuta);
  }

  deleteRuta(idRuta) {
    return this.http.delete("http://localhost:3000/rutas/" + idRuta);
  }
}
