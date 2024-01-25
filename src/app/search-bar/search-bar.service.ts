import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  API_URL: string = 'http://127.0.0.1:8080/v1/api';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  findAllAddress() {
    return this.http.get(this.API_URL+'/address');
  }

  findAllStates() {
    return this.http.get(this.API_URL+'/address/states');
  }

  findAllCityByState(state: any) {
    /*if(state != undefined || state != null || state != '') {
      return this.http.get(this.API_URL+'/address/states/'+state);
    }
    return this.http.get(this.API_URL+'/address/states/cities'); */
    return ['João Pessoa','Cabedelo','Santa Rita','Lucena'] 
  }

  findAllDistrictsByCity(cities: any) {
    /*if(state != undefined || state != null || state != '') {
      return this.http.get(this.API_URL+'/address/states/'+state);
    }
    return this.http.get(this.API_URL+'/address/states/cities'); */
    return ['Aeroclube','Bessa','Mandacaru','Mangabeira', 'Miramar'] 
  }
  
}
