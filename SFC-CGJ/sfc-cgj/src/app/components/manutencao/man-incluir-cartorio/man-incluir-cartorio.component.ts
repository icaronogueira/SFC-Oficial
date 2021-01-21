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
    console.log(event.value);

    
    
  }
  //-----------------------------------------------------


}
