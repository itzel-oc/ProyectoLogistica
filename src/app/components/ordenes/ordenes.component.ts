import { Component, OnInit } from '@angular/core';
import { IOrden } from 'src/app/interfaces/orden';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {
  public ordenes: IOrden[] = [];
  constructor(private _ordenes: OrdenesService, public router: Router) { }

  deleteOrden(idOrden) {
    this._ordenes.deleteOrden(idOrden).subscribe(()=> this.fetchData());
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this._ordenes.getAllOrdenes().subscribe((response) => this.ordenes = response);
  }

}
