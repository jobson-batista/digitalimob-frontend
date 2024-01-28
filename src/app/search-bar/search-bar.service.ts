import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment as e } from '../../environments/environment';
import { Utils } from '../utils/utils';
import { StatesCodes } from '../enums/StatesCodes';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  headers = new HttpHeaders();
  u = new Utils();

  constructor(private http: HttpClient) { }

  findAllAddress() {
    return this.http.get(e.API_URL + e.ADDRESS_URL);
  }

  findAllStates() {
    return this.http.get(e.API_URL + e.ADDRESS_URL + e.STATES_URL);
  }

  findAllCityByState(state: string) {
    let stateCode: string = this.u.removeAccents(state).replace(' ', '_').toUpperCase();
    let keysState = Object.keys(StatesCodes) as (keyof typeof StatesCodes)[];
    let valuesState = Object.values(StatesCodes);

    for (const state in keysState) {
      if (keysState[state] === stateCode) {
        return this.http.get(e.API_URL + e.ADDRESS_URL + e.STATES_URL + '/' + valuesState[state]);
      }
    }
    return null;
  }

  findAllDistrictsByCity(state:string, cities: string[]) {
    let citiesCodes: string[] = [];
    for (let city in cities) {
      console.log(this.u.removeAccents(cities[city]).replace(' ','_').toUpperCase());
      citiesCodes.push(this.u.removeAccents(cities[city]).replace(' ','_').toUpperCase());
    }
    let params = {params: new HttpParams().set('cities',citiesCodes.toString())}
    //console.log(this.getStateCode(state));
    return this.http.get(e.API_URL + e.ADDRESS_URL + e.STATES_URL+'/'+this.getStateCode(state)+e.DISTRICTS_URL, params);
  }

  getStateCode(state: string) {
    let stateCode: string = this.u.removeAccents(state).replace(' ', '_').toUpperCase();
    let keysState = Object.keys(StatesCodes) as (keyof typeof StatesCodes)[];
    let valuesState = Object.values(StatesCodes);

    for (const state in keysState) {
      if (keysState[state] === stateCode) {
        return valuesState[state];
      }
    }
    return null;
  }

}
