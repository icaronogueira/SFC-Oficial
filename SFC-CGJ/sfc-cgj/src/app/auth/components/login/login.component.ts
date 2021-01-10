import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ApiService } from './../../../services/api.service'
import { AuthService } from './../../../services/auth.service'
import { Router } from '@angular/router';
import { UsuarioCgjInterface } from 'src/app/interfaces/usuario-cgj-interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IpService } from 'src/app/services/ip.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  isLogin: boolean = false; 
  errorMessage:string='';
  baseUrl = 'http://localhost:3000';
  ipAdress:any;

  constructor( private _api: ApiService, private _auth: AuthService, private _router:Router, private http:HttpClient,
      private ip:IpService) {
  }

  ngOnInit() {
    //Verifica se tem login
    this.isUserLogin();

    //Salva inicialmente o ano corrente
    let anoAtual=new Date().getFullYear();
    this._auth.setDataInLocalStorage('ano-corrente',anoAtual);
  }






  onSubmit(form: NgForm) {  //AJEITAR ESSE LOGIN
    console.log('Your form data : ', form.value);

    this.ip.getIpAdress().subscribe((res:any)=>{

          //Pega dados do usuasrio para salvar no LocalStorage - somente se identificado pelo ladp
        this.http.get<UsuarioCgjInterface[]>(`${this.baseUrl}/login-usuario-cgj?id_usr_cgj_tjam=`+form.value.login+`&ip=`+res.ip).subscribe(
          data => {
            this._auth.setDataInLocalStorage('userData',JSON.stringify(data));
            this.isLogin=true;
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            alert("Client-side error occured.");
          } else {
            alert("Server-side error occured.");
          }
        });
      //-----------------------------------------------------

    });

    


    
    // this._api.ldapRequest(form.value.email, form.value.password).subscribe((res: any) => {
    //    console.log(res)
    //     this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
    //     this._auth.setDataInLocalStorage('token', res.token);
    //     this._router.navigate(['']);
    //     this.isLogin=true;
    // }, err => {
    //   this.errorMessage = err['error'].message;
    // });
  }






  
  isUserLogin(){
    console.log(this._auth.getUserDetails())
    if(this._auth.getUserDetails() != null){
      this.isLogin = true;
    }
    console.log(this.isLogin);
  }
  
  logoutView($event:any){
    this.isLogin=false;
  }

}