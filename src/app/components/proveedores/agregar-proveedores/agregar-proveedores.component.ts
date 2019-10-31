import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedoresService } from 'src/app/services/proveedores.service';
import { Proveedor } from 'src/app/classes/proveedor';
import { DatosBancarios } from 'src/app/classes/datos-bancarios';
import { RutasService } from 'src/app/services/rutas.service';
import { IRuta } from 'src/app/interfaces/ruta';

@Component({
  selector: 'app-agregar-proveedores',
  templateUrl: './agregar-proveedores.component.html',
  styleUrls: ['./agregar-proveedores.component.css']
})
export class AgregarProveedoresComponent implements OnInit {

  constructor(
    private _proveedorService: ProveedoresService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private states: CountriesService,
    private _rutas: RutasService
  ) {}
  public show: boolean = false;
  public buttonName: any = 'Show';
  addProveedor: FormGroup;
  rutas: IRuta[];

  proveedorModel = new Proveedor(0, 0, '', '', '', '', '', '', '', '', '', '', 0, 0);
  datosBancariosModel = new DatosBancarios(0, 0, 0, '', '', '', '', '', '', '', '', '', '');
  estadosMexico: string[];
  estadosUsa: string[];
  estadosCanada: string[];
  estadosJapon: string[];
  edit: boolean = false;
  submitted: boolean = false;

  toggle(e) {
    e.stopPropagation();
    e.preventDefault();
    this.show = !this.show;
    if (this.show) {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show';
    }
  }

  updateProveedor() {
    this._proveedorService
      .updateProveedor(this.proveedorModel.idProveedor, this.proveedorModel)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/proveedores']);
        },
        error => {
          console.log(error);
        }
      );
  }

  onSubmit() {
    this.submitted = true;
    if (this.addProveedor.status === 'VALID') {
      this.proveedorModel = {...this.proveedorModel, ...this.addProveedor.value};
      if (!this.edit) {
        this._proveedorService
          .insertProveedor(this.proveedorModel)
          .subscribe(data => this.router.navigate(["/proveedores"]));
      } else {
        this.updateProveedor();
      }
    }
  }

  ngOnInit() {
    this.estadosMexico = this.states.getMexico();
    this.estadosUsa = this.states.getUsa();
    this.estadosCanada = this.states.getCanada();
    this.estadosJapon = this.states.getJapon();
    const params = this.route.snapshot.params;
    this._rutas.getAllRutas().subscribe((ruta) => this.rutas = ruta);
    this.addProveedor = this.formBuilder.group({
      idRuta: ['', Validators.required],
      nombre: [null, [Validators.required]],
      RFC: [null, Validators.required],
      contacto: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      telefono: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
      pais: ['', Validators.required],
      estado: ['', Validators.required],
      ciudad: [null, Validators.required],
      direccion: [null, Validators.required],
      CP: [null, Validators.required],
      diasCredito: [null, Validators.required],
      limiteCredito: [null, Validators.required],
      DatosBancarios: this.formBuilder.group({
        banco: [null],
        cuenta: [''],
        clabe: [null],
        ABA: [null],
        SWIFT: [null],
        direccion: [null],
        ciudad: [null],
        estado: [null],
        pais: [null]
      })
    })
    if (params.idProveedor) {
      this._proveedorService.getProveedor(params.idProveedor).subscribe(
        res => {
          this.proveedorModel = {...res};
          this.edit = true;
          this.addProveedor = this.formBuilder.group({
            idRuta: [this.proveedorModel.idRuta, [Validators.required]],
            nombre: [this.proveedorModel.nombre, [Validators.required]],
            RFC: [this.proveedorModel.RFC, Validators.required],
            contacto: [this.proveedorModel.contacto, Validators.required],
            email: [this.proveedorModel.email, [Validators.required, Validators.email]],
            telefono: [this.proveedorModel.telefono, [Validators.required, Validators.pattern("^[0-9]*$")]],
            pais: [this.proveedorModel.pais, Validators.required],
            estado: [this.proveedorModel.estado, Validators.required],
            ciudad: [this.proveedorModel.ciudad, Validators.required],
            direccion: [this.proveedorModel.direccion, Validators.required],
            CP: [this.proveedorModel.CP, Validators.required],
            diasCredito: [this.proveedorModel.diasCredito, Validators.required],
            limiteCredito: [this.proveedorModel.limiteCredito, Validators.required],
            DatosBancarios: this.formBuilder.group({
              banco: [this.proveedorModel.DatosBancarios.length > 0 ? this.proveedorModel.DatosBancarios[0].banco : null],
              cuenta: [this.proveedorModel.DatosBancarios.length > 0 ? this.proveedorModel.DatosBancarios[0].cuenta : null],
              clabe: [this.proveedorModel.DatosBancarios.length > 0 ? this.proveedorModel.DatosBancarios[0].clabe : null],
              ABA: [this.proveedorModel.DatosBancarios.length > 0 ? this.proveedorModel.DatosBancarios[0].ABA : null],
              SWIFT: [this.proveedorModel.DatosBancarios.length > 0 ? this.proveedorModel.DatosBancarios[0].SWIFT : null],
              direccion: [this.proveedorModel.DatosBancarios.length > 0 ? this.proveedorModel.DatosBancarios[0].direccion : null],
              ciudad: [this.proveedorModel.DatosBancarios.length > 0 ? this.proveedorModel.DatosBancarios[0].ciudad : null],
              estado: [this.proveedorModel.DatosBancarios.length > 0 ? this.proveedorModel.DatosBancarios[0].estado : null],
              pais: [this.proveedorModel.DatosBancarios.length > 0 ? this.proveedorModel.DatosBancarios[0].pais : null]
            })
          })
        },
        error => console.log(error)
      );
    }

  }

}
