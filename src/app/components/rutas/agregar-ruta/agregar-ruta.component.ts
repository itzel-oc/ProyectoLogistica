import { Component, OnInit } from "@angular/core";
import { RutasService } from "../../../services/rutas.service";
import { Ruta } from "src/app/classes/ruta";
import { ActivatedRoute, Router } from "@angular/router";
import { CountriesService } from 'src/app/services/countries.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "app-agregar-ruta",
  templateUrl: "./agregar-ruta.component.html",
  styleUrls: ['./agregar-ruta.component.css']
})
export class AgregarRutaComponent implements OnInit {
  constructor(
    private _rutasService: RutasService,
    private router: Router,
    private route: ActivatedRoute,
    private states: CountriesService,
    private formBuilder: FormBuilder
  ) {}
  public show: boolean = false;
  public buttonName: any = 'Show';
  public estadosMexico: string[];
  public estadosUsa: string[];
  public estadosCanada: string[];
  public estadosJapon: string[];
  addRuta: FormGroup;
  submitted: boolean = false;

  rutaModel = new Ruta(0, '', '', '', '', '', '', '', '', '');

  edit: boolean = false;

  toggle() {
    this.show = !this.show;
    if (this.show) {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show';
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.addRuta.status === 'VALID') {
      this.rutaModel = {...this.rutaModel, ...this.addRuta.value};
      if (!this.edit) {
        this._rutasService
          .insertRuta(this.rutaModel)
          .subscribe(data => this.router.navigate(['/ruta']));
      } else {
        this.updateRuta();
      }
    }
  }

  updateRuta() {
    this._rutasService
      .updateRuta(this.rutaModel.idRuta, this.rutaModel)
      .subscribe(
        res => {
          this.router.navigate(['/rutas']);
        },
        error => {
          console.log(error);
        }
      );
  }

  ngOnInit() {
    this.estadosMexico = this.states.getMexico();
    this.estadosUsa = this.states.getUsa();
    this.estadosCanada = this.states.getCanada();
    this.estadosJapon = this.states.getJapon();
    const params = this.route.snapshot.params;
    this.addRuta = this.formBuilder.group({
      nombre: [null, Validators.required],
      paisOrigen: [''],
      cdOrigen: [null],
      edoOrigen: [''],
      paisDestino: [''],
      edoDestino: [''],
      cdDestino: [''],
      CPDestino: ['']
    });
    if (params.idRuta) {
      this._rutasService.getRuta(params.idRuta).subscribe(
        res => {
          this.rutaModel = {...res};
          this.edit = true;
          this.addRuta = this.formBuilder.group({
            nombre: [this.rutaModel.nombre, Validators.required],
            paisOrigen: [this.rutaModel.paisOrigen],
            cdOrigen: [this.rutaModel.cdOrigen],
            edoOrigen: [this.rutaModel.edoOrigen],
            paisDestino: [this.rutaModel.paisDestino],
            edoDestino: [this.rutaModel.edoDestino],
            cdDestino: [this.rutaModel.cdDestino],
            CPDestino: [this.rutaModel.CPDestino]
          });
        },
        error => console.log(error)
      );
    }
  }
}
