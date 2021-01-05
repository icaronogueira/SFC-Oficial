import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { UsuarioCgjInterface } from 'src/app/interfaces/usuario-cgj-interface';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-config-usuarios-cgj',
  templateUrl: './config-usuarios-cgj.component.html',
  styleUrls: ['./config-usuarios-cgj.component.css']
})
export class ConfigUsuariosCGJComponent implements OnInit {

  baseUrl = 'http://localhost:3000';
  settings = {
    actions: {
      custom: [
        {
          name: 'info',
          title: 'Info '
        }
      ]
    },
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
      }
    }
  };
  
  constructor(private http: HttpClient, private dialog: MatDialog) { 
    
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

  onCustom(event: any) {
    if (event.action=='info') {
      const dialogInfo = this.dialog.open(DialogDataExampleDialog, {data: event.data});
    }
  }

}


@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: UsuarioCgjInterface) {}
}

