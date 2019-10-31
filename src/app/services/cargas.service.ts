import { Injectable } from '@angular/core';
import { Cargas } from '../interfaces/cargas';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CargasService {

  constructor(private http: HttpClient) { }

  getAllCargas(): Observable<Cargas[]> {
    return this.http.get<Cargas[]>("http://localhost:3000/cargas");
  }

}
