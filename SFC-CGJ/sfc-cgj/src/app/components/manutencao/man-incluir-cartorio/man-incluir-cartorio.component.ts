import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartorioInterface } from 'src/app/interfaces/cartorio-interface';
import { AuthService } from 'src/app/services/auth.service';
import { IpService } from 'src/app/services/ip.service';

@Component({
  selector: 'app-man-incluir-cartorio',
  templateUrl: './man-incluir-cartorio.component.html',
  styleUrls: ['./man-incluir-cartorio.component.css']
})
export class ManIncluirCartorioComponent implements OnInit {

  cidadesAmazonas=[
    "Alvarães",
    "Amaturá",
    "Anamã",
    "Anori",
    "Apuí",
    "Atalaia do Norte",
    "Autazes",
    "Barcelos",
    "Barreirinha",
    "Benjamin Constant",
    "Beruri",
    "Boa Vista do Ramos",
    "Boca do Acre",
    "Borba",
    "Caapiranga",
    "Canutama",
    "Carauari",
    "Carauari",
    "Careiro",
    "Careiro da Várzea",
    "Coari",
    "Codajás",
    "Eirunepé",
    "Envira",
    "Fonte Boa",
    "Guajará",
    "Humaitá",
    "Ipixuna",
    "Iranduba",
    "Itacoatiara",
    "Itamarati",
    "Itapiranga",
    "Japurá",
    "Juruá",
    "Jutaí",
    "Lábrea",
    "Manacapuru",
    "Manaus",
    "Manicoré",
    "Maraã",
    "Maués",
    "Nhamundá",
    "Nova Olinda do Norte",
    "Novo Airão",
    "Novo Aripuanã",
    "Parintins",
    "Pauini",
    "Presidente Figueiredo",
    "Rio Preto da Eva",
    "Santa Isabel do Rio Negro",
    "Santo Antônio do Içá",
    "São Gabriel da Cachoeira",
    "São Paulo de Olivença",
    "São Sebastião do Uatumã",
    "Silves",
    "Tabatinga",
    "Tapauá",
    "Tefé",
    "Tonatins",
    "Uarini",
    "Urucará",
    "Urucurituba"

  ];

  baseUrl = 'http://localhost:3000';
  showError=false;
  msgErro="";
  usuarioData: any;
  usuario:any;
  ipAdress:any;
  
  constructor(private http: HttpClient, private _auth: AuthService, private ip: IpService) { }

  ngOnInit(): void {
    //inicializa nome usuario e ip cliente
    this.usuarioData =  this._auth.getUserDetails();
    this.usuario = this.usuarioData["nome_usr"];
    this.ip.getIpAdress().subscribe((res:any)=>{
      this.ipAdress=res.ip;
    });
  }

  //Cria novo cartorio
  criarNovoCartorio(event:any) {

    console.log(event.value);
    if (event.value.cnpj_cartorio=="") {
      this.showError=true;
      this.msgErro='Preencha o campo "CNPJ do cartório"';
      return;
    }
    if (event.value.nome_cartorio=="") {
      this.showError=true;
      this.msgErro='Preencha o campo "Nome do cartório"';
      return;
    }
    if (event.value.cap_int=="") {
      this.showError=true;
      this.msgErro='Preencha o campo "Capital/Interior"';
      return;
    }


    let novoCartorio = {
      "usr_inc": this.usuarioData["id_usr_cgj_tjam"],
      "ip_inc": this.ipAdress,
      "cnpj_cartorio": event.value.cnpj_cartorio,
      "nome_cartorio": event.value.nome_cartorio,
      "cap_int": event.value.cap_int,
      "endereco": event.value.endereco,
      "num": event.value.num,
      "bairro": event.value.bairro,
      "cep": event.value.cep,
      "cidade": event.value.cidade,
      "e_mail_principal": event.value.e_mail_principal,
      "e_mail_secundario": event.value.e_mail_secundario,
      "telefone1": event.value.telefone1,
      "telefone2": event.value.telefone2,
      "site": event.value.site
    }
    //requisição para inserir usuario-cgj no banco
    this.http.post<CartorioInterface>(`${this.baseUrl}/cartorio`, novoCartorio).subscribe(  
      res => {
        console.log(res);
        alert(event.value.nome_cartorio+" incluído com sucesso.");
        event.resetForm();
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          alert("Cliente-side error occured");
        } else {
          alert("Server-side error occured");
        }
      }
    );




    this.showError=false;
    
    
  }
  //-----------------------------------------------------


}
