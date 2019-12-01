import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { RutasService } from 'src/app/services/rutas.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { Orden } from 'src/app/classes/orden';
import { AgenciaAduanalService } from 'src/app/services/agencia-aduanal.service';

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
    private _clientes: ClientesService,
    ) { }
    addOrden: FormGroup;
    rutas = [];
    clientes = [];
    edit: boolean = false;
    submitted: boolean = false;
    ordenModel = new Orden(0, 0, 0, '', '', '', new Date(), '', '');

    updateOrden() {
      this._ordenes
        .updateOrden(this.ordenModel.idPO, this.ordenModel)
        .subscribe(
          res => {
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
      PONumber: [null, Validators.required],
      tipoCarga: [null],
      fechaCarga: [new Date()],
      direccionOrigen: [null],
      direccionDestino: [null]
    });
    if (params.idPO) {
      this._ordenes.getOrden(params.idPO).subscribe((res) => {
        this.ordenModel = {...res};
        this.edit = true;
        this.addOrden = this.formBuilder.group({
          producto: [this.ordenModel.producto, Validators.required],
          idCliente: [this.ordenModel.idCliente, Validators.required],
          idRuta: [this.ordenModel.idRuta, Validators.required],
          PONumber: [this.ordenModel.PONumber, Validators.required],
          tipoCarga: [this.ordenModel.tipoCarga],
          fechaCarga: [this.ordenModel.fechaCarga],
          direccionOrigen: [this.ordenModel.direccionOrigen],
          direccionDestino: [this.ordenModel.direccionDestino]
        });
      })
    }
  }

}
