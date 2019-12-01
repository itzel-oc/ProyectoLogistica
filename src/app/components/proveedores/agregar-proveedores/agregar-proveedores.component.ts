import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
  inner = [''];

  proveedorModel = new Proveedor(0, 0, [], '', '', '', '', '', '', '', '', '', '', 0, 0);
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


  addRuta() {
    this.inner.push('');
    this.addProveedor.addControl(`idRuta${this.inner.length - 1}`, new FormControl(''));
    this.addProveedor.controls[`idRuta${this.inner.length - 1}`].setValue('');
    this.addProveedor.controls[`idRuta${this.inner.length - 1}`].setValidators([Validators.required]);
    this.addProveedor.controls[`idRuta${this.inner.length - 1}`].updateValueAndValidity();
  }

  substractRuta(index) {
    this.inner.splice(index, 1);
    this.addProveedor.removeControl(`idRuta${index}`);
    this.addProveedor.updateValueAndValidity();
  }

  updateProveedor() {

    this._proveedorService
      .updateProveedor(this.proveedorModel.idProveedor, this.proveedorModel)
      .subscribe(
        res => {
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
      this.inner.forEach((values, index) => {
        this.proveedorModel.rutas.push(this.addProveedor.value['idRuta'+index]);
      });
      this.proveedorModel = {...this.proveedorModel, ...this.addProveedor.value};
      if (!this.edit) {
        this._proveedorService
          .insertProveedor(this.proveedorModel)
          .subscribe(data => this.router.navigate(["/proveedores"]));
      } else {
        this.proveedorModel.rutas = [];
        this.inner.forEach((values, index) => {
          this.proveedorModel.rutas.push(this.addProveedor.value['idRuta'+index]);
        });
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
      idRuta0: ['', Validators.required],
      nombre: [null, Validators.required],
      RFC: [null],
      contacto: [null],
      email: [null, [Validators.email]],
      telefono: [null, [Validators.pattern("^[0-9]*$")]],
      pais: [''],
      estado: [''],
      ciudad: [null],
      direccion: [null],
      CP: [null],
      diasCredito: [null],
      limiteCredito: [null],
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
          this.inner = [...res.rutas];
          this.edit = true;
          this.addProveedor = this.formBuilder.group({
            idRuta0: [this.proveedorModel.rutas[0], Validators.required],
            nombre: [this.proveedorModel.nombre, Validators.required],
            RFC: [this.proveedorModel.RFC],
            contacto: [this.proveedorModel.contacto],
            email: [this.proveedorModel.email, [Validators.email]],
            telefono: [this.proveedorModel.telefono, [Validators.pattern("^[0-9]*$")]],
            pais: [this.proveedorModel.pais],
            estado: [this.proveedorModel.estado],
            ciudad: [this.proveedorModel.ciudad],
            direccion: [this.proveedorModel.direccion],
            CP: [this.proveedorModel.CP],
            diasCredito: [this.proveedorModel.diasCredito],
            limiteCredito: [this.proveedorModel.limiteCredito],
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
          });
          this.inner.forEach((values, index) => {
            if (index !== 0) {
              this.addProveedor.addControl(`idRuta${index}`, new FormControl(''));
              this.addProveedor.controls[`idRuta${index}`].setValue(values);
              this.addProveedor.controls[`idRuta${index}`].setValidators([Validators.required]);
              this.addProveedor.controls[`idRuta${index}`].updateValueAndValidity();
            }
          });
        },
        error => console.log(error)
      );
    }

  }

}
