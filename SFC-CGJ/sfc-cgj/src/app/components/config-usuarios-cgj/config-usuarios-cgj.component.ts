import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-config-usuarios-cgj',
  templateUrl: './config-usuarios-cgj.component.html',
  styleUrls: ['./config-usuarios-cgj.component.css']
})
export class ConfigUsuariosCGJComponent implements OnInit {

  settings = {
    columns: {
      id: {
        title: 'ID',
      },
      albumId: {
        title: 'Album',
      },
      title: {
        title: 'Title',
      },
      url: {
        title: 'Url',
      },
    }
  };
  
  source: ServerDataSource;

  constructor(http: HttpClient) { 
    this.source = new ServerDataSource(http, { endPoint: '' });
  }

  ngOnInit(): void {
  }

}
