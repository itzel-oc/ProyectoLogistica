import { Component, OnInit, DoCheck } from '@angular/core';
import { CargasService } from 'src/app/services/cargas.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { OrdenesService } from 'src/app/services/ordenes.service';

@Component({
  selector: 'app-cuentas-cobrar',
  templateUrl: './cuentas-cobrar.component.html',
  styleUrls: ['./cuentas-cobrar.component.css']
})
export class CuentasCobrarComponent implements OnInit, DoCheck {
  cargas = [];
  ordenes = [];
  proveedores = [];
  clientes = [];
  totalPagoProveedor = 0;
  totalPagoCliente = 0;
  cuentasPorPagar = 0;
  cuentasPorCobrar = 0;
  adeudoProveedores = [];
  adeudoClientes = [];
  constructor(private _cargasService: CargasService, private _clientes: ClientesService, private _proveedores: ProveedoresService, private _ordenes: OrdenesService) { }

  ngDoCheck(): void {
    if (this.cargas.length > 0) {
      this.totalPagoProveedor = this.cargas.reduce((total, acc) => parseFloat(total) + parseFloat(acc.costoProveedor), 0);
      this.totalPagoCliente = this.cargas.reduce((total, acc) => parseFloat(total) + parseFloat(acc.precioCliente), 0);
      this.cuentasPorPagar = this.cargas.reduce((total, acc) => {
        if (acc.estatusPagoProveedor === 'Pendiente') {
          return total + parseFloat(acc.costoProveedor);
        } else {
          return total + 0;
        }
      }, 0);
      this.cuentasPorCobrar = this.cargas.reduce((total, acc) => {
        if (acc.estatusPago === 'Pendiente') {
          return total + parseFloat(acc.precioCliente);
        } else {
          return total + 0;
        }
      }, 0);
    }
    if (this.proveedores.length > 0 && this.ordenes.length > 0 && this.clientes.length > 0) {
      this.cargas.map((value) => {
        if (value.estatusPagoProveedor === 'Pendiente') {
          let temp = { proveedor: '', ...value };
          temp.proveedor = this.proveedores.find((value) => value.idProveedor === value.idProveedor);
          this.adeudoProveedores.push(temp);
        }
        if (value.estatusPago === 'Pendiente') {
          let temp = { cliente: [], ...value };
          [temp.cliente] = this.ordenes.map((value) => this.clientes.find((cliente) => cliente.idCliente === value.idCliente));
          this.adeudoClientes.push(temp);
        }
      });
    }
    // console.log(this.cuentasPorPagar)
  }


  ngOnInit() {
    this._cargasService.getAllCargas().subscribe((response) => this.cargas = response);
    this._proveedores.getAllProveedores().subscribe(response => this.proveedores = response);
    this._ordenes.getAllOrdenes().subscribe(response => this.ordenes = response);
    this._clientes.getAllClientes().subscribe(response => this.clientes = response);
  }

}
