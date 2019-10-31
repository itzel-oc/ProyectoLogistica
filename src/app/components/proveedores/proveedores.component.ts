import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { IProveedor } from 'src/app/interfaces/proveedor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  public proveedores:IProveedor[] = [];
  constructor(private proveedor: ProveedoresService, public router: Router) { }

  deleteCliente(idProveedor) {
    this.proveedor.deleteProveedor(idProveedor).subscribe(() => {
      this.fetchData();
    });
  }

  ngOnInit() {
    this.fetchData();
  }
  
  fetchData() {
    this.proveedor.getAllProveedores().subscribe((proveedor) => this.proveedores = proveedor);
  }

}
