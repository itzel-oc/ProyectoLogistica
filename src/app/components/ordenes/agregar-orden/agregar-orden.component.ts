import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { RutasService } from 'src/app/services/rutas.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { Orden } from 'src/app/classes/orden';

@Component({
  selector: 'app-agregar-orden',
  templateUrl: './agregar-orden.component.html',
  styleUrls: ['./agregar-orden.component.css']
})
export class AgregarOrdenComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _ordenes: OrdenesService,
    private _rutas: RutasService,
    private _clientes: ClientesService
    ) { }
    addOrden: FormGroup;
    rutas = [];
    clientes = [];
    edit: boolean = false;
    submitted: boolean = false;
    ordenModel = new Orden(0, 0, 0, '', '', new Date(), '', '');

    updateOrden() {
      this._ordenes
        .updateOrden(this.ordenModel.idPO, this.ordenModel)
        .subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/ordenes']);
          },
          error => {
            console.log(error);
          }
        );
    }

    onSubmit() {
      this.submitted = true;
      if (this.addOrden.status === 'VALID') {
        this.ordenModel = {...this.ordenModel, ...this.addOrden.value};
        if (!this.edit) {
          this._ordenes
            .insertOrden(this.ordenModel)
            .subscribe(data => this.router.navigate(['/ordenes']));
        } else {
          this.updateOrden();
        }
      }
    }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this._rutas.getAllRutas().subscribe((ruta) => this.rutas = ruta);
    this._clientes.getAllClientes().subscribe((cliente) => this.clientes = cliente);
    this.addOrden = this.formBuilder.group({
      producto: [null, Validators.required],
      idCliente: ['', Validators.required],
      idRuta: ['', Validators.required],
      tipoCarga: [null, Validators.required],
      fechaCarga: [new Date(), Validators.required],
      direccionOrigen: [null, Validators.required],
      direccionDestino: [null, Validators.required]
    });
    if (params.idPO) {
      this._ordenes.getOrden(params.idPO).subscribe((res) => {
        this.ordenModel = {...res};
        this.edit = true;
        this.addOrden = this.formBuilder.group({
          producto: [this.ordenModel.producto, Validators.required],
          idCliente: [this.ordenModel.idCliente, Validators.required],
          idRuta: [this.ordenModel.idRuta, Validators.required],
          tipoCarga: [this.ordenModel.tipoCarga, Validators.required],
          fechaCarga: [this.ordenModel.fechaCarga, Validators.required],
          direccionOrigen: [this.ordenModel.direccionOrigen, Validators.required],
          direccionDestino: [this.ordenModel.direccionDestino, Validators.required]
        });
      })
    }
  }

}
