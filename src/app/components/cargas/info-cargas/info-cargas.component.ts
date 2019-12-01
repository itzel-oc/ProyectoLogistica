import { Component, OnInit } from '@angular/core';
import { CargasService } from 'src/app/services/cargas.service';
import { Cargas } from 'src/app/interfaces/cargas';
import { ActivatedRoute } from '@angular/router';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { AgenciaAduanalService } from 'src/app/services/agencia-aduanal.service';

@Component({
  selector: 'app-info-cargas',
  templateUrl: './info-cargas.component.html',
  styleUrls: ['./info-cargas.component.css']
})
export class InfoCargasComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _carga: CargasService, private _proveedor: ProveedoresService, private _orden: OrdenesService, private _agencia: AgenciaAduanalService) { }
  carga;
  provedor;
  orden;
  agencia;
  ngOnInit() {
    const params = this.route.snapshot.params;
    this._carga.getCarga(params.idCarga).subscribe(value => {
      this.carga = value;
      this._proveedor.getProveedor(value.idProveedor).subscribe(prov => this.provedor = prov.nombre);
      this._orden.getOrden(value.idPO).subscribe(ord => this.orden = ord.PONumber);
      this._agencia.getAgenciaAduanal(value.idAgenciaAduanal).subscribe(agen => this.agencia = agen.nombre);
    });
  }

}
