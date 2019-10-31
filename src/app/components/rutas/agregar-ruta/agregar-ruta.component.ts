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
  public buttonName: any = "Show";
  public estadosMexico: string[];
  public estadosUsa: string[];
  public estadosCanada: string[];
  public estadosJapon: string[];
  addRuta: FormGroup;
  submitted: boolean = false;

  rutaModel = new Ruta(0, "", "", "", "", "", "", "", "", "");

  edit: boolean = false;

  toggle() {
    this.show = !this.show;
    if (this.show) this.buttonName = "Hide";
    else this.buttonName = "Show";
  }

  onSubmit() {
    this.submitted = true;
    if (this.addRuta.status === 'VALID') {
      this.rutaModel = {...this.rutaModel, ...this.addRuta.value};
      if (!this.edit) {
        this._rutasService
          .insertRuta(this.rutaModel)
          .subscribe(data => this.router.navigate(["/rutas"]));
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
          console.log(res);
          this.router.navigate(["/rutas"]);
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
      nombre: [null, [Validators.required]],
      paisOrigen: ['', Validators.required],
      cdOrigen: [null, Validators.required],
      edoOrigen: ['', [Validators.required]],
      paisDestino: ['', [Validators.required]],
      edoDestino: ['', Validators.required],
      cdDestino: ['', Validators.required],
      CPDestino: ['', Validators.required]
    });
    if (params.idRuta) {
      this._rutasService.getRuta(params.idRuta).subscribe(
        res => {
          this.rutaModel = {...res};
          console.log(this.rutaModel)
          this.edit = true;
          this.addRuta = this.formBuilder.group({
            nombre: [this.rutaModel.nombre, [Validators.required]],
            paisOrigen: [this.rutaModel.paisOrigen, Validators.required],
            cdOrigen: [this.rutaModel.cdOrigen, Validators.required],
            edoOrigen: [this.rutaModel.edoOrigen, [Validators.required]],
            paisDestino: [this.rutaModel.paisDestino, [Validators.required]],
            edoDestino: [this.rutaModel.edoDestino, Validators.required],
            cdDestino: [this.rutaModel.cdDestino, Validators.required],
            CPDestino: [this.rutaModel.CPDestino, Validators.required]
          });
        },
        error => console.log(error)
      );
    }
  }
}
