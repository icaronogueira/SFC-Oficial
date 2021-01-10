import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUserDetails() {
    let userData =  localStorage.getItem('userData');
    return userData ? JSON.parse(userData || '{}') : null ;
  }

  setDataInLocalStorage(variableName: any, data: any) {
    localStorage.setItem(variableName, data);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  clearStorage() {
    localStorage.clear();
  }

}
