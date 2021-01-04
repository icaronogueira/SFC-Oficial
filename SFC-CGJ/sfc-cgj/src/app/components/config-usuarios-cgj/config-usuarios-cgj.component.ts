import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsuarioCgjInterface } from 'src/app/interfaces/usuario-cgj-interface';

@Component({
  selector: 'app-config-usuarios-cgj',
  templateUrl: './config-usuarios-cgj.component.html',
  styleUrls: ['./config-usuarios-cgj.component.css']
})
export class ConfigUsuariosCGJComponent implements OnInit {

  baseUrl = 'http://localhost:3000';
  settings = {
    columns: {
      nome_usr: {
        title: 'Nome',
        filter: true,
        editable: true,
        addable: true
      },
      situacao: {
        title: 'Situação',
        filter: true,
        editable: true
      },
      id_usr_cgj_tjam: {
        title: 'Email',
        filter: true,
        editable: true
      },
      more: {
        title: '',
      },
    }
  };
  
  constructor(private http: HttpClient) { 
    
  }


  data: any= [];

  ngOnInit(): void {
    
    this.http.get<UsuarioCgjInterface[]>(`${this.baseUrl}/usuario-cgj`).subscribe(
        data => {
          this.data = data;
          console.log(this.data);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      });

  }

}
