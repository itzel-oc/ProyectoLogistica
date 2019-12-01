import { Component, OnDestroy, OnInit } from "@angular/core";
import { LoginService } from './services/login.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private login: LoginService) {}
  title = "blas-logistica";
  token;
  ngOnInit(): void {
    this.login.token.subscribe(value => this.token = value );
  }
  ngOnDestroy(): void {
    this.login.token.unsubscribe();
  }

}
