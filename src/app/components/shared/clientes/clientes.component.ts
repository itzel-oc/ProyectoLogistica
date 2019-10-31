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
    public router: Router,
    private route: ActivatedRoute
  ) { }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }


  deleteCliente(idCliente) {
    this._clientesService.deleteCliente(idCliente).subscribe(() => {
      this.fetchData();
    });
  }

  ngOnInit() {
    this._clientesService
      .getAllClientes()
      .subscribe(data => this.clientes = data);
  }

  fetchData() {
    this._clientesService.getAllClientes().subscribe(data => {
      this.clientes = data;
    });
  }
}
