import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  sysConfig = environment.sysConfig;

  constructor(private httpService: HttpClient) { }

  getUser(login, senha){
    this.httpService
        .post(`${this.sysConfig.ENDPOINT_LDAP_AUTH}/login`, {
          username: login,
          password: senha,
        })
        .toPromise()
        .then(
          res => console.log(res)
          /* async () =>
            await this.generateJwtExpiresIn({ payload: queryResult }, '1h'), */
        )
        .catch(error => {
          /* throw new LdapErrorException(error.response.data.message); */
        });
  }
}

