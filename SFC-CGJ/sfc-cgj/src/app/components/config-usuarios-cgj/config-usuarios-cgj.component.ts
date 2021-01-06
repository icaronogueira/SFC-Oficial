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
        title: 'Situação (Ativo/Inativo)',
        type: 'html',
        editor: {
          type: 'list',
          config: {
            list: [{ value: 'A', title: 'Ativo' }, { value: 'I', title: 'Inativo' }]
          }
        }
      },
      id_usr_cgj_tjam: {
        title: 'Email',
        filter: true,
        editable: true
      }
    },
    add: {
      confirmCreate: true
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

  onCustom(event: any) {  //mostra dialog com mais informações

    event.data.dt_ult_entrada = event.data.dt_ult_entrada ? new Date(event.data.dt_ult_entrada) : null;
    event.data.dt_ult_saida = event.data.dt_ult_saida ? new Date(event.data.dt_ult_saida) : null;
    event.data.dt_inc = event.data.dt_inc ? new Date(event.data.dt_inc) : null;
    event.data.dt_alt = event.data.dt_alt ? new Date(event.data.dt_alt) : null;
    event.data.dt_ina = event.data.dt_ina ? new Date(event.data.dt_ina) : null;
   
    if (event.action=='info') {
      const dialogInfo = this.dialog.open(DialogDataExampleDialog, {
        data: event.data
      });
    }
  }

  // addRecord(event:any) {
  //   var data = {
  //     "situacao": event.newData.situacao,
  //     "id_usr_cgj_tjam": event.newData.id_usr_cgj_tjam,
  //     "nome_usr": event.newData.nome_usr,
  //     "qtde_entrada": 0,
  //     "dt_ult_entrada": null,
  //     "ip_ult_entrada": null,
  //     "qtde_saida": 0,
  //     "dt_ult_saida": null,
  //     "ip_ult_saida": null,
  //     "dt_inc": null,
  //     "usr_inc": string,
  //     "ip_inc": string,
  //     "dt_alt": null,
  //     "usr_alt": null,
  //     "ip_alt": null,
  //     "qtde_alt": 0,
  //     "dt_ina": null,
  //     "usr_ina": null,
  //     "ip_ina": null 
  //   }

  // }

}


@Component({ //modal com mais informações
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: UsuarioCgjInterface) {}
}

