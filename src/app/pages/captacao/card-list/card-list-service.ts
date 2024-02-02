import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as e } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardListService {

  constructor(private http: HttpClient) { }


  findEnterprises() {
    return this.http.get(e.API_URL+e.ENTERPRISE_URL);
  }

}
