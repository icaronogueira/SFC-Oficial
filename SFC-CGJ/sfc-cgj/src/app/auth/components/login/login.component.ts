import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ApiService } from './../../../services/api.service'
import { AuthService } from './../../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  isLogin: boolean = true; //mudar para false depois
  errorMessage:string='';

  constructor( private _api: ApiService, private _auth: AuthService, private _router:Router) {
  }

  ngOnInit() {
    this.isUserLogin();
  }

  onSubmit(form: NgForm) {  //AJEITAR ESSE LOGIN
    console.log('Your form data : ', form.value);
    this.isLogin=true;
   // this._api.ldapRequest(form.value.email, form.value.password).subscribe((res: any) => {
       // console.log(res)
        /* this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
        this._auth.setDataInLocalStorage('token', res.token);
        this._router.navigate(['']); */
    //}, err => {
      // this.errorMessage = err['error'].message;
    //});
  }

  isUserLogin(){
    console.log(this._auth.getUserDetails())
    if(this._auth.getUserDetails() != null){
      this.isLogin = true;
    }
    console.log(this.isLogin);
  }
  logout(){
    this._auth.clearStorage()
    this._router.navigate(['']);
  }
}