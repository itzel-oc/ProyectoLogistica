import { Component, OnInit } from "@angular/core";
import { ClientesService } from "../../../services/clientes.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-clientes",
  templateUrl: "./clientes.component.html",
  styles: []
})
export class ClientesComponent implements OnInit {
  public clientes = [];

  cliente: any = {};

  constructor(
    private _clientesService: ClientesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  onClick() {
    this.route.params.subscribe(params => {
      this._clientesService.getCliente(params["idCliente"]).subscribe(res => {
        this.cliente = res;
      });
    });
  }

  getClienteDetails(idCliente) {
    this._clientesService.getCliente(idCliente).subscribe(data => {
      this.cliente = data;
      console.log(this.cliente);
    });
  }

  deleteCliente(idCliente) {
    console.log(idCliente);
    this._clientesService.deleteCliente(idCliente).subscribe(() => {
      this.fetchData();
    });
  }

  ngOnInit() {
    this._clientesService
      .getAllClientes()
      .subscribe(data => (this.clientes = data));

    this.route.params.subscribe(params => {
      this._clientesService.getCliente(params["idCliente"]).subscribe(res => {
        this.cliente = res;
      });
    });
  }

  fetchData() {
    this._clientesService.getAllClientes().subscribe(data => {
      this.clientes = data;
    });
  }
}
