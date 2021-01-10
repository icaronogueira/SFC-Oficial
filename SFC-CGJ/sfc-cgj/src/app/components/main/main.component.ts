import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ResourceLoader } from '@angular/compiler';
import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthModule } from 'src/app/auth/auth/auth.module';
import { UsuarioCgjInterface } from 'src/app/interfaces/usuario-cgj-interface';
import { AuthService } from 'src/app/services/auth.service';
import { IpService } from 'src/app/services/ip.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  baseUrl = 'http://localhost:3000';
  usuarioData:any;
  nome_usuario: any;
  num_acessos: any;
  dt_ult_acesso: any;

  @Output() logoutView = new EventEmitter<any>();

  constructor(private auth: AuthService,private _router:Router, private ip:IpService, private http:HttpClient) { }

  ngOnInit():void {
    this.usuarioData = this.auth.getUserDetails();
    // console.log("usuarioData = " + this.usuarioData );
    this.nome_usuario = this.usuarioData["nome_usr"];
    this.num_acessos = this.usuarioData["qtde_entrada"];
    this.dt_ult_acesso = this.usuarioData["dt_ult_entrada"];
  }

  logout(){
    this.auth.clearStorage();
    this.ip.getIpAdress().subscribe((res:any)=>{

      //Pega dados do usuasrio para salvar no LocalStorage - somente se identificado pelo ladp
      this.http.put<UsuarioCgjInterface[]>(`${this.baseUrl}/put-usuario-cgj-logout?id_usr_cgj=`+this.usuarioData["id_usr_cgj"]+`&ip=`+res.ip,{}).subscribe(
        data => {
          console.log(data);
          this.logoutView.emit();
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
  }

}
