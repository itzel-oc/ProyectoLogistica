import { Component, OnInit } from '@angular/core';
import { CargasService } from 'src/app/services/cargas.service';

@Component({
  selector: 'app-cargas',
  templateUrl: './cargas.component.html',
  styleUrls: ['./cargas.component.css']
})
export class CargasComponent implements OnInit {
  cargas;
  constructor(private _cargasService: CargasService) { }

  ngOnInit() {
    this._cargasService
      .getAllCargas()
      .subscribe(data => this.cargas = console.log('------>',data));
  }

  fetchData() {
    this._cargasService.getAllCargas().subscribe(data => {
      this.cargas = data;
    });
  }
}
