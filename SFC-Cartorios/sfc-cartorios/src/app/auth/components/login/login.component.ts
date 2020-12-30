import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogin: boolean = false;

  errorMessage: any;
  showError:boolean=false;

  constructor(private _api: ApiService, private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this.isUserLogin();
  }

  onSubmit(form:NgForm) {
    console.log('Your form data: ', form.value);
    this._api.postTypeRequest('oficiais/login', form.value).subscribe((res: any) => {
      if (res.status) {
        console.log(res);
        if (res.data.length==0) {
          console.log("verificação correta");
          this.showError=true;
          this.errorMessage = "Email ou senha incorretos.";
        } else {
          this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
          this._auth.setDataInLocalStorage('token', res.token);
          this._router.navigate(['']);
        }
      } 
    }, err => {
      this.showError=true;
      this.errorMessage = err['error'].message;
    });
  }

  isUserLogin() {
    console.log(this._auth.getUserDetails());
    if (this._auth.getUserDetails() != null) {
      this.isLogin = true;
    }
  }

  logout(){
    this._auth.clearStorage();
    this._router.navigate(['']);
  }

}
