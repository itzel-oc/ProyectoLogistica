import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-proveedor',
  templateUrl: './info-proveedor.component.html',
  styleUrls: ['./info-proveedor.component.css']
})
export class InfoProveedorComponent implements OnInit {
  proveedor: any = {};
  constructor(
    private _proveedoresService: ProveedoresService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._proveedoresService.getProveedor(params["idProveedor"]).subscribe(res => {
        this.proveedor = res;
      });
    });
  }

}
