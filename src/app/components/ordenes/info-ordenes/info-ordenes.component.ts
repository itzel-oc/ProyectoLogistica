import { Component, OnInit } from '@angular/core';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { Routes, Route, ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { RutasService } from 'src/app/services/rutas.service';

@Component({
  selector: 'app-info-ordenes',
  templateUrl: './info-ordenes.component.html',
  styleUrls: ['./info-ordenes.component.css']
})
export class InfoOrdenesComponent implements OnInit {

  constructor(private _orden: OrdenesService, private route: ActivatedRoute, private _cliente: ClientesService, private _ruta: RutasService) { }
  orden;
  cliente;
  ruta;
  ngOnInit() {
    const params = this.route.snapshot.params;
    this._orden.getOrden(params.idPO).subscribe(value => {
      this.orden = value;
      this._cliente.getCliente(value.idCliente).subscribe(client => this.cliente = client);
      this._ruta.getRuta(value.idRuta).subscribe(rut => this.ruta = rut);
    });
  }

}
