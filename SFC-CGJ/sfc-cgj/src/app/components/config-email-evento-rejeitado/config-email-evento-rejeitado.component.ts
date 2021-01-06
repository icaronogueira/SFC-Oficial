import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailEditorComponent } from 'angular-email-editor';

@Component({
  selector: 'app-config-email-evento-rejeitado',
  templateUrl: './config-email-evento-rejeitado.component.html',
  styleUrls: ['./config-email-evento-rejeitado.component.css']
})
export class ConfigEmailEventoRejeitadoComponent implements OnInit {
  title = 'angular-email-editor';

  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }
  @ViewChild('editor')
  private emailEditor: EmailEditorComponent = new EmailEditorComponent;

  editorLoaded(event:any){
    // Ao Inicializar , carrega o json email-rejeitado do banco
    this.http.get(`${this.baseUrl}/modelo-email-rejeitado`).subscribe(
      (data:any) => {
        let json = JSON.parse(data[0]['modelo_email_rejeitado']);
        this.emailEditor.editor.loadDesign(json);
      },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Client-side error occured.");
      } else {
        console.log("Server-side error occured.");
      }
    });
    // -------------------------------------------------
  }

  saveDesign() {

    this.emailEditor.editor.saveDesign(
      (data: any) => {

        console.log('saveDesign', data);

        this.http.put(`${this.baseUrl}/modelo-email-rejeitado`,{data: data}).subscribe(
          data2 => {
            alert("Modelo salvo");
            console.log(data2);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log("Server-side error occured.");
          }
        });

      }
    );

    
  }
}
