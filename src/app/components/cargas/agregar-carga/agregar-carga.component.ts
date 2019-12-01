import { Component, OnInit } from '@angular/core';
import { CargasService } from 'src/app/services/cargas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Carga } from 'src/app/classes/carga';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { AgenciaAduanalService } from 'src/app/services/agencia-aduanal.service';
import { IProveedor } from 'src/app/interfaces/proveedor';
import { IOrden } from 'src/app/interfaces/orden';

@Component({
  selector: 'app-agregar-carga',
  templateUrl: './agregar-carga.component.html',
  styleUrls: ['./agregar-carga.component.css']
})
export class AgregarCargaComponent implements OnInit {
  constructor(
    private _cargasService: CargasService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _proveedorService: ProveedoresService,
    private _ordenesService: OrdenesService,
    private _agenciaAduanal: AgenciaAduanalService
  ) {}
  public show: boolean = false;
  public buttonName: any = "Show";
  addCarga: FormGroup;
  proveedores: IProveedor[] = [];
  ordenes: IOrden[] = [];
  agenciaAduanales: any[] = [];


  cargaModel = new Carga(0, 0, 0, 0, 0, 0, 0, new Date(), 0, 0, '', '', '', 0, '', 0, '', '', '', '', '', '', '', '', '');
  edit: boolean = false;
  submitted: boolean = false;

  updateCarga() {
    this._cargasService
      .updateCarga(this.cargaModel.idCarga, this.cargaModel)
      .subscribe(
        res => {
          this.router.navigate(["/cargas"]);
        },
        error => {
          console.log(error);
        }
      );
  }

  onSubmit() {
    this.submitted = true;
    if (this.addCarga.status === 'VALID') {
      this.cargaModel = {...this.cargaModel, ...this.addCarga.value};
      if (!this.edit) {
        this._cargasService
          .insertCarga(this.cargaModel)
          .subscribe(data => this.router.navigate(["/cargas"]));
      } else {
        this.updateCarga();
      }
    }
    // this._agenciaAduanal.insertAgenciaAduanal({idAgenciaAduanal: 1, nombre: 'aduana', RFC: '33', contacto: '33'}).subscribe(value => console.log(''))
  }


  ngOnInit() {
    const params = this.route.snapshot.params;
    this._proveedorService.getAllProveedores().subscribe((proveedor) => {
      this.proveedores = proveedor;
    });
    this._ordenesService.getAllOrdenes().subscribe((orden) => {
      this.ordenes = orden;
    });
    this._agenciaAduanal.getAllAgenciasAduanales().subscribe((agencia) => {
      this.agenciaAduanales = agencia;
    });
    this.addCarga = this.formBuilder.group({
      idProveedor: ['', [Validators.required]],
      idPO: ['', Validators.required],
      peso: [null],
      numCajas: [null],
      numPallets: [null],
      temperatura: [null],
      fechaDescarga: [new Date()],
      precioCliente: [null],
      costoProveedor: [null],
      estatusCarga: [null],
      estatusPago: [''],
      estatusPagoProveedor: [''],
      comisionBroker: [null],
      metodoPago: [null],
      idAgenciaAduanal: ['', Validators.required],
      placasTractor: [null],
      ecoTractor: [null],
      codigoAlpha: [null],
      caat: [null],
      ecoThermo: [null],
      placas: [null],
      pies: [null],
      nombreOperador: [null],
      numOperador: [null]
    })
    if (params.idCarga) {
      this._cargasService.getCarga(params.idCarga).subscribe(
        res => {
          this.cargaModel = {...res};
          this.edit = true;
          this.addCarga = this.formBuilder.group({
            idProveedor: [this.cargaModel.idProveedor, [Validators.required]],
            idPO: [this.cargaModel.idPO, Validators.required],
            peso: [this.cargaModel.peso],
            numCajas: [this.cargaModel.numCajas],
            numPallets: [this.cargaModel.numPallets],
            temperatura: [this.cargaModel.temperatura],
            fechaDescarga: [new Date(this.cargaModel.fechaDescarga)],
            precioCliente: [this.cargaModel.precioCliente],
            costoProveedor: [this.cargaModel.costoProveedor],
            estatusCarga: [this.cargaModel.estatusCarga],
            estatusPago: [this.cargaModel.estatusPago],
            estatusPagoProveedor: [this.cargaModel.estatusPagoProveedor],
            comisionBroker: [this.cargaModel.comisionBroker],
            metodoPago: [this.cargaModel.metodoPago],
            idAgenciaAduanal: [this.cargaModel.idAgenciaAduanal, Validators.required],
            placasTractor: [this.cargaModel.placasTractor],
            ecoTractor: [this.cargaModel.ecoTractor],
            codigoAlpha: [this.cargaModel.codigoAlpha],
            caat: [this.cargaModel.caat],
            ecoThermo: [this.cargaModel.ecoThermo],
            placas: [this.cargaModel.placas],
            pies: [this.cargaModel.pies],
            nombreOperador: [this.cargaModel.nombreOperador],
            numOperador: [this.cargaModel.numOperador]
          })
        },
        error => console.log(error)
      );
    }

  }

}
