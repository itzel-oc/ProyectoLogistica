import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IProveedor } from "../interfaces/proveedor";
import { Observable } from "rxjs";
import { Proveedor } from "../classes/proveedor";

@Injectable({
  providedIn: "root"
})
export class ProveedoresService {
  constructor(private http: HttpClient) {}

  getAllProveedores(): Observable<IProveedor[]> {
    return this.http.get<IProveedor[]>("http://localhost:3000/proveedores");
  }

  insertProveedor(proveedor: Proveedor) {
    return this.http.post<any[]>(
      "http://localhost:3000/proveedores",
      proveedor
    );
  }

  getProveedor(idProveedor: string): Observable<any> {
    return this.http.get<any>(
      "http://localhost:3000/proveedores/" + idProveedor
    );
  }

  updateProveedor(idProveedor, updatedProveedor): Observable<any> {
    return this.http.put(
      "http://localhost:3000/proveedores/" + idProveedor,
      updatedProveedor
    );
  }

  deleteProveedor(idProveedor) {
    return this.http.delete("http://localhost:3000/proveedores/" + idProveedor);
  }
}
