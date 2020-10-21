import { Component, Input, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() nome:string;
  @Input() senha:string;

  constructor(private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  login(){
    this.loginService.getUser(this.nome, this.senha);
  }


}
