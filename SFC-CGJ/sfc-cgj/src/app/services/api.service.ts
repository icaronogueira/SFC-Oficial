import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:4000';
  ENDPOINT_LDAP_AUTH='https://sistemas.tjam.jus.br/services/autenticador/api/v1'

  constructor(private _http: HttpClient) { }

  ldapRequest(login: any, senha: any){
    return this._http.post('https://sistemas.tjam.jus.br/services/autenticador/api/v1/login', {
      username: login,
      password: senha,
    }).pipe(map(res => {
      return res;
    }))
    /* .toPromise()
    .then(
      async () =>
        await this.generateJwtExpiresIn({ payload: queryResult }, '1h'),
    )
    .catch(error => {
      throw new LdapErrorException(error.response.data.message);
    }); */
  }

  getTypeRequest(url:any) {
    return this._http.get(`${this.baseUrl}${url}`).pipe(map(res => {
      return res;
    }));
  }

  postTypeRequest(url:any, payload:any) {
    return this._http.post(`${this.baseUrl}${url}`, payload).pipe(map(res => {
      return res;
    }));
  }

  putTypeRequest(url:any, payload:any) {
    return this._http.put(`${this.baseUrl}${url}`, payload).pipe(map(res => {
      return res;
    }));
  }

}
