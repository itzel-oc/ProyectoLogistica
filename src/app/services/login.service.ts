import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Domain from '../../../src/config';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token = new BehaviorSubject<any>(sessionStorage.getItem('token'));
  constructor(private http: HttpClient) { }

  sendLogin(account: any) {
    return this.http.post<any>(`${Domain}/login`, account, {
      headers: {'token': 'keeey'}
    });
  }

  destroy() {
    return this.http.get<any>(`${Domain}/destroy`);
  }

}
