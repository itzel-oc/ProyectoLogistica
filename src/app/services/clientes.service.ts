import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ICliente } from "../interfaces/cliente";
import { Observable } from "rxjs";
import { Cliente } from "../classes/cliente";

@Injectable({
  providedIn: "root"
})
export class ClientesService {
  constructor(private http: HttpClient) {}

  getAllClientes(): Observable<ICliente[]> {
    return this.http.get<ICliente[]>("http://admin-blaslogistica.com:3000/clientes");
  }

  insertCliente(cliente: Cliente) {
    return this.http.post<any[]>("http://localhost:3000/clientes", cliente);
  }

  getCliente(idCliente: string): Observable<any> {
    return this.http.get<any>("http://localhost:3000/clientes/" + idCliente);
  }

  updateCliente(idCliente, updatedCliente): Observable<any> {
    return this.http.put(
      "http://localhost:3000/clientes/" + idCliente,
      updatedCliente
    );
  }

  deleteCliente(idCliente) {
    return this.http.delete("http://localhost:3000/clientes/" + idCliente);
  }
}
