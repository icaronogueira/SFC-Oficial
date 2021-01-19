import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-config-configura-ano-corrente',
  templateUrl: './config-configura-ano-corrente.component.html',
  styleUrls: ['./config-configura-ano-corrente.component.css']
})
export class ConfigConfiguraAnoCorrenteComponent implements OnInit {

  qtdAnos:number=50;
  anosArray:any;
  anoSelecionado:any;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.anosArray = Array.from(Array(this.qtdAnos).keys()).map((x,i)=>(2021-i));
  }

  salvaAno(){
    this.auth.setDataInLocalStorage('ano-corrente',this.anoSelecionado);
  }

}
