import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartorioInterface } from 'src/app/interfaces/cartorio-interface';
import { OficialInterface } from 'src/app/interfaces/oficial-interface';
import { AuthService } from 'src/app/services/auth.service';
import { IpService } from 'src/app/services/ip.service';

@Component({
  selector: 'app-man-cartorios',
  templateUrl: './man-cartorios.component.html',
  styleUrls: ['./man-cartorios.component.css']
})
export class ManCartoriosComponent implements OnInit {

  baseUrl = 'http://localhost:3000';
  data:any;
  usuarioData: any;
  ipAdress: any;
  usuario: any;
  mostraForm=false;
  labelCriarEditar:string = "Registrar novo cartório";
  cpfNomeOficiais:any;
  modelDbPicker:any;


  //configurações da tabela
  settings = {
    actions: {
      custom: [
        {
          name: 'info',
          title: 'Info '
        },
        {
          name: 'edit',
          title: 'Editar '
        }
      ],
      add:false,
      edit:false
    },
    columns: {
      nome_cartorio: {
        title: 'Nome',
        filter: true
      },
      cnpj_cartorio: {
        title: 'CPNJ',
        filter: true
      },
      situacao: {
        title: 'Ativo/Inativo',
        type: 'html',
        editor: {
          type: 'list',
          config: {
            list: [{ value: 'A', title: 'Ativo' }, { value: 'I', title: 'Inativo' }]
          }
        },
        width:"1%"
      },
      provimento: {
        title: 'Provido/Interino',
        type: 'html',
        editor: {
          type: 'list',
          config: {
            list: [{ value: 'P', title: 'Provido' }, { value: 'I', title: 'Interino' }]
          }
        },
        width:"1%"
      },
      cpf_oficial: {
        title: 'CPF Oficial',
        filter: true
      },
      cap_int: {
          title: 'Capital/Interior',
          type: 'html',
          editor: {
            type: 'list',
            config: {
              list: [{ value: 'C', title: 'Capital' }, { value: 'I', title: 'Interior' }]
            }
          },
          width:"1%"
        },
      cidade: {
        title: 'Cidade',
        filter: true
      },
      e_mail_principal: {
        title: 'Email principal',
        filter: true
      },
      telefone1: {
        title: 'Telefone 1',
        filter: true
      },
      site: {
        title: 'Site',
        filter: true
      } 
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

    //inicializa nome usuario e ip cliente
    this.usuarioData =  this._auth.getUserDetails();
    this.usuario = this.usuarioData["nome_usr"];
    this.ip.getIpAdress().subscribe((res:any)=>{
      this.ipAdress=res.ip;
    });
    //------------------------------------
  }

  showFormCriar(){
    this.mostraForm=true;

    //Popula lista de oficiais
    this.http.get(`${this.baseUrl}/oficiais-cpf-nome`).subscribe(
      dataOficiais => {
        this.cpfNomeOficiais=dataOficiais;
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        alert("Client-side error occured.");
      } else {
        alert("Server-side error occured.");
      }
    });
    //-----------------------------------------------


  }

  //Cria novo cartorio
  criarNovoCartorio(event:any) {
    this.mostraForm=false;
    // let novoCartorio = {
    //   "usr_inc": this.usuarioData["id_usr_cgj_tjam"],
    //   "ip_inc": this.ipAdress,
    //   "cnpj_cartorio": event.newData.cnpj_cartorio,
    //   "situacao": event.newData.situacao,
    //   "provimento": event.newData.provimento,
    //   "data_provimento": event.newData.data_provimento,
    //   "cpf_oficial": event.newData.cpf_oficial,
    //   "cap_int": event.newData.cap_int,
    //   "endereco": event.newData.endereco,
    //   "num": event.newData.num,
    //   "bairro": event.newData.bairro,
    //   "cep": event.newData.cep,
    //   "cidade": event.newData.cidade,
    //   "e_mail_principal": event.newData.e_mail_principal,
    //   "e_mail_secundario": event.newData.e_mail_secundario,
    //   "telefone1": event.newData.telefone1,
    //   "telefone2": event.newData.telefone2,
    //   "site": event.newData.site
    // }
    // //requisição para inserir usuario-cgj no banco
    // this.http.post<CartorioInterface>(`${this.baseUrl}/cartorio`, novoCartorio).subscribe(  
    //   res => {
    //     console.log(res);
    //     event.confirm.resolve(event.newData);
    //   },
    //   (err: HttpErrorResponse) => {
    //     if (err.error instanceof Error) {
    //       alert("Cliente-side error occured");
    //     } else {
    //       alert("Server-side error occured");
    //     }
    //   }
    // );
  }
  //-----------------------------------------------------




  onCustom($event: any) {

  }

  deleteRecord($event: any) {

  }

  //Método trata input mask
  logValue($event:any) {
    
  }
  //-----------------------

}



