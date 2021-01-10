import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { UsuarioCgjInterface } from 'src/app/interfaces/usuario-cgj-interface';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { IpService } from 'src/app/services/ip.service';


@Component({
  selector: 'app-config-usuarios-cgj',
  templateUrl: './config-usuarios-cgj.component.html',
  styleUrls: ['./config-usuarios-cgj.component.css']
})
export class ConfigUsuariosCGJComponent implements OnInit {

  baseUrl = 'http://localhost:3000';

  //json de configurações para o ng-smart-table
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
    },
    edit: {
      confirmSave: true
    },
    delete:{
      confirmDelete: true
    }
  };

  //array usuarios-cgj
  data: any= [];
  //usuario logado e endereco cliente ip
  usuarioData: any;
  usuario:string=""
  ipAdress:string="";

  
  constructor(private http: HttpClient, private dialog: MatDialog, private _auth: AuthService, private ip: IpService) { 
    
  }


  ngOnInit(): void {
    
    //Pega a lista de usuarios-cgj para inicializar a lista
    this.http.get<UsuarioCgjInterface[]>(`${this.baseUrl}/usuario-cgj`).subscribe(
        data => {
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

    //inicializa nome usuario e ip cliente
    this.usuarioData =  this._auth.getUserDetails();
    this.usuario = this.usuarioData["nome_usr"];
    this.ip.getIpAdress().subscribe((res:any)=>{
      this.ipAdress=res.ip;
      console.log("meu ip = " + this.ipAdress);
    });
    
  }


  //mostra dialog com mais informações
  onCustom(event: any) {  
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
  //---------------------------------------

  //Cria novo usuario-cgj
  addRecord(event:any) {
    
      let novoUsuarioCgj = {
        "situacao": event.newData.situacao,
        "id_usr_cgj_tjam": event.newData.id_usr_cgj_tjam,
        "nome_usr": event.newData.nome_usr,
        "qtde_saida": 0,
        "usr_inc": this.usuarioData["id_usr_cgj_tjam"],
        "ip_inc": this.ipAdress
      }
      //requisição para inserir usuario-cgj no banco
      this.http.post<UsuarioCgjInterface>(`${this.baseUrl}/usuario-cgj`, novoUsuarioCgj).subscribe(
        res => {
          console.log(res);
          event.confirm.resolve(event.newData);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            alert("Cliente-side error occured");
          } else {
            alert("Server-side error occured");
          }
        }
      );

  }

  //Edita valores
  updateRecord(event:any) {
    console.log(event);
    let editUsuarioCgj = {
      "situacao": event.newData.situacao,
      "id_usr_cgj_tjam": event.newData.id_usr_cgj_tjam,
      "nome_usr": event.newData.nome_usr,
      "usr_alt": this.usuarioData["id_usr_cgj_tjam"],
      "ip_alt": this.ipAdress
    }
    this.http.put<UsuarioCgjInterface>(`${this.baseUrl}/usuario-cgj?id_usr_cgj=`+event.data.id_usr_cgj, editUsuarioCgj).subscribe(
      res => {
        console.log(res);
        event.confirm.resolve(event.newData);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          alert("Erro na aplicação.");
        } else {
          alert("Erro no servidor.");
        }
      });
  }

  //deleta usuario-cgj
  deleteRecord(event: any) {
    console.log("event.data = " + JSON.stringify(event.data));
    this.http.delete<any>(`${this.baseUrl}/usuario-cgj?id_usr_cgj=`+event.data.id_usr_cgj).subscribe(
      res => {
        console.log(res);
        event.confirm.resolve(event.source.data);
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        alert("Client-side error occured.");
      } else {
        alert("Server-side error occured.");
      }
    });
  }
  //-------------------





}


@Component({ //modal com mais informações
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: UsuarioCgjInterface) {}
}

