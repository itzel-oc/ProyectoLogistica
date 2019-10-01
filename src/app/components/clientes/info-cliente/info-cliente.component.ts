import { Component, OnInit } from "@angular/core";
import { ClientesService } from "../../../services/clientes.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Cliente } from "../../../classes/cliente";

@Component({
  selector: "app-info-cliente",
  templateUrl: "./info-cliente.component.html",
  styleUrls: ["info-cliente.css"]
})
export class InfoClienteComponent implements OnInit {
  cliente: any = {};

  constructor(
    private _clientesService: ClientesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log("params = ", params);
      this._clientesService.getCliente(params["idCliente"]).subscribe(res => {
        this.cliente = res;
      });
    });
  }
}
