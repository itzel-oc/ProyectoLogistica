import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IProveedor } from "../interfaces/proveedor";
import { Observable } from "rxjs";
import { Proveedor } from "../classes/proveedor";
import Domain from '../../../src/config';

@Injectable({
  providedIn: "root"
})
export class ProveedoresService {
  constructor(private http: HttpClient) {}

  getAllProveedores(): Observable<IProveedor[]> {
    return this.http.get<IProveedor[]>(`${Domain}/proveedores`);
  }

  insertProveedor(proveedor: Proveedor) {
    return this.http.post<any[]>(
      `${Domain}/proveedores`,
      proveedor
    );
  }

  getProveedor(idProveedor: string): Observable<any> {
    return this.http.get<any>(
      `${Domain}/proveedores/` + idProveedor
    );
  }

  updateProveedor(idProveedor, updatedProveedor): Observable<any> {
    return this.http.put(
      `${Domain}/proveedores/` + idProveedor,
      updatedProveedor
    );
  }

  deleteProveedor(idProveedor) {
    return this.http.delete(`${Domain}/proveedores/` + idProveedor);
  }
}
