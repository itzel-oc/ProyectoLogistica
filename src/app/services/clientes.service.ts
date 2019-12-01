import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ICliente } from "../interfaces/cliente";
import { Observable } from "rxjs";
import { Cliente } from "../classes/cliente";
import Domain from '../../../src/config';

@Injectable({
  providedIn: "root"
})
export class ClientesService {
  constructor(private http: HttpClient) {}

  getAllClientes(): Observable<ICliente[]> {
    return this.http.get<ICliente[]>(`${Domain}/clientes`);
  }

  insertCliente(cliente: Cliente) {
    return this.http.post<any[]>(`${Domain}/clientes`, cliente);
  }

  getCliente(idCliente: string): Observable<any> {
    return this.http.get<any>(`${Domain}/clientes/` + idCliente);
  }

  updateCliente(idCliente, updatedCliente): Observable<any> {
    return this.http.put(
      `${Domain}/clientes/` + idCliente,
      updatedCliente
    );
  }

  deleteCliente(idCliente) {
    return this.http.delete(`${Domain}/clientes/` + idCliente);
  }
}
