import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as e } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  VIACEP_API_URL = 'https://viacep.com.br/ws';
  JSON = '/json';

  constructor(private http: HttpClient) { }

  findAllConstructionCompanies() {
    return this.http.get(e.API_URL + e.CONSTRUCTION_COMPANY);
  }

  getAddressByCep(cep: string) {
    console.log(this.VIACEP_API_URL+'/'+cep+this.JSON);
    if(cep.length === 8) {
      return this.http.get(this.VIACEP_API_URL+'/'+cep+this.JSON);
    } 
    return null;
  }

}
