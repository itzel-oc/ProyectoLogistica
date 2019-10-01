import { Component, OnInit } from "@angular/core";
import { ClientesService } from "../../../services/clientes.service";
import { Cliente } from "src/app/classes/cliente";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-agregar-cliente",
  templateUrl: "./agregar-cliente.component.html",
  styleUrls: []
})
export class AgregarClienteComponent implements OnInit {
  constructor(
    private _clientesService: ClientesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  public show: boolean = false;
  public buttonName: any = "Show";

  clienteModel = new Cliente(0, "", "", "", "", "", "", "", "", "", "", 0, 0);

  edit: boolean = false;

  toggle() {
    this.show = !this.show;
    if (this.show) this.buttonName = "Hide";
    else this.buttonName = "Show";
  }

  onSubmit() {
    this._clientesService
      .insertCliente(this.clienteModel)
      .subscribe(data => this.router.navigate(["/clientes"]));
  }

  updateCliente() {
    this._clientesService
      .updateCliente(this.clienteModel.idCliente, this.clienteModel)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(["/clientes"]);
        },
        error => {
          console.log(error);
        }
      );
  }

  ngOnInit() {
    const params = this.route.snapshot.params;
    if (params.idCliente) {
      this._clientesService.getCliente(params.idCliente).subscribe(
        res => {
          console.log(res);
          this.clienteModel = res;
          this.edit = true;
        },
        error => console.log(error)
      );
    }
  }
}
