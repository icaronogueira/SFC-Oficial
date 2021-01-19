import { Component, OnInit } from '@angular/core';

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

  
  constructor() { }

  ngOnInit(): void {
  }

  //Cria novo cartorio
  criarNovoCartorio(event:any) {
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


}
