import { Component, OnInit } from '@angular/core';
import { CargasService } from 'src/app/services/cargas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cargas',
  templateUrl: './cargas.component.html',
  styleUrls: ['./cargas.component.css']
})
export class CargasComponent implements OnInit {
  cargas = [];
  constructor(private _cargasService: CargasService, public router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this._cargasService
      .getAllCargas()
      .subscribe(data => this.cargas = data);
  }

  deleteCarga(idCarga) {
    this._cargasService.deleteCarga(idCarga).subscribe((res) => this.fetchData());

  }

  fetchData() {
    this._cargasService.getAllCargas().subscribe(data => {
      this.cargas = data;
    });
  }
}
