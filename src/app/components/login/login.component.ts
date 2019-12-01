import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  constructor(private _login: LoginService, private router: Router, private route: ActivatedRoute,   private formBuilder: FormBuilder) { }
  account: FormGroup;

  onSubmit() {
    this.submitted = true;
    if (this.account.status === 'VALID') {
      this._login.sendLogin(this.account.value).subscribe(response => {
        if (response.value) {
          sessionStorage.setItem('token', response.value);
          this._login.token.next(response.value);
          window.location.reload();
        }
      });
    }
  }

  ngOnInit() {
    this.account = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

}
