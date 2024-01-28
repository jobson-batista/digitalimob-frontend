import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as e } from '../../environments/environment';
import { Utils } from '../utils/utils';
import { StatesCodes } from '../enums/StatesCodes';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  findAllAddress() {
    return this.http.get(e.API_URL + e.ADDRESS_URL);
  }

  findAllStates() {
    return this.http.get(e.API_URL + e.ADDRESS_URL + e.STATES_URL);
  }

  findAllCityByState(state: string) {
    let u = new Utils();
    let stateCode: string = u.removeAccents(state).replace(' ', '_').toUpperCase();
    let keysState = Object.keys(StatesCodes) as (keyof typeof StatesCodes)[];
    let valuesState = Object.values(StatesCodes);

    for (const state in keysState) {
      if (keysState[state] === stateCode) {
        return this.http.get(e.API_URL + e.ADDRESS_URL + e.STATES_URL + '/' +valuesState[state]);
      }
    }
    return null;
  }

  findAllDistrictsByCity(cities: any) {
    /*if(state != undefined || state != null || state != '') {
      return this.http.get(this.API_URL+'/address/states/'+state);
    }
    return this.http.get(this.API_URL+'/address/states/cities'); */
    return ['Aeroclube', 'Bessa', 'Mandacaru', 'Mangabeira', 'Miramar']
  }

}
