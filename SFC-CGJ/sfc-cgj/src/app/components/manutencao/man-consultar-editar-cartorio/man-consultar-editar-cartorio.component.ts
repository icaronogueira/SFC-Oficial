import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartorioInterface } from 'src/app/interfaces/cartorio-interface';
import { AuthService } from 'src/app/services/auth.service';
import { IpService } from 'src/app/services/ip.service';

@Component({
  selector: 'app-man-consultar-editar-cartorio',
  templateUrl: './man-consultar-editar-cartorio.component.html',
  styleUrls: ['./man-consultar-editar-cartorio.component.css']
})
export class ManConsultarEditarCartorioComponent implements OnInit {
  baseUrl = 'http://localhost:3000';
  data:any
  //configurações da tabela
  settings = {
    actions:false,
    columns: {
      cnpj_cartorio: {
        title: 'CPNJ',
        filter: true
      },
      nome_cartorio: {
        title: 'Nome do cartório',
        filter: true
      },
      cidade: {
        title: 'Cidade',
        filter: true
      },
      telefone1: {
        title: 'Telefone 1',
        filter: false
      },
      nome_oficial: {
        title: 'Oficial',
        filter: true
      },
    },
    edit: {
      confirmSave: true
    },
    delete:{
      confirmDelete: true
    },
    pager: {
      display: true,
      perPage: 5
    }
  };


  constructor(private http: HttpClient, private _auth: AuthService, private ip: IpService) { }


  
  ngOnInit(): void {
    //Pega a lista de cartorios para inicializar a lista
    this.http.get<CartorioInterface[]>(`${this.baseUrl}/cartorios`).subscribe(
      (data: any) => {
        this.data = data;
        console.log(this.data);
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        alert("Client-side error occured.");
      } else {
        alert("Server-side error occured.");
      }
    });
    //------------------------------------------------------
  }

  onUserRowSelect(event:any): void {
    console.log(event);
  }


}
