import { Component, OnInit } from "@angular/core";
import { RutasService } from "../../../services/rutas.service";
import { Ruta } from "src/app/classes/ruta";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-agregar-ruta",
  templateUrl: "./agregar-ruta.component.html",
  styleUrls: []
})
export class AgregarRutaComponent implements OnInit {
  constructor(
    private _rutasService: RutasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  public show: boolean = false;
  public buttonName: any = "Show";

  rutaModel = new Ruta(0, "", "", "", "", "", "", "", "", "");

  edit: boolean = false;

  toggle() {
    this.show = !this.show;
    if (this.show) this.buttonName = "Hide";
    else this.buttonName = "Show";
  }

  onSubmit() {
    this._rutasService
      .insertRuta(this.rutaModel)
      .subscribe(data => this.router.navigate(["/rutas"]));
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
    const params = this.route.snapshot.params;
    if (params.idRuta) {
      this._rutasService.getRuta(params.idRuta).subscribe(
        res => {
          console.log(res);
          this.rutaModel = res;
          this.edit = true;
        },
        error => console.log(error)
      );
    }
  }
}
