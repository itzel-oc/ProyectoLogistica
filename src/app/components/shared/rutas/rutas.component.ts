import { Component, OnInit } from "@angular/core";
import { RutasService } from "../../../services/rutas.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-rutas",
  templateUrl: "./rutas.component.html",
  styleUrls: []
})
export class RutasComponent implements OnInit {
  public rutas = [];

  ruta: any = {};

  constructor(
    private _rutasService: RutasService,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  onClick() {
    this.route.params.subscribe(params => {
      this._rutasService.getRuta(params["idRuta"]).subscribe(res => {
        this.ruta = res;
        console.log(params);
      });
    });
  }

  fetchData() {
    this._rutasService.getAllRutas().subscribe(data => {
      this.rutas = data;
    });
  }

  deleteRuta(idRuta) {
    this._rutasService.deleteRuta(idRuta).subscribe(() => {
      this.fetchData();
    });
  }

  ngOnInit() {
    this._rutasService.getAllRutas().subscribe(data => (this.rutas = data));
  }
}
