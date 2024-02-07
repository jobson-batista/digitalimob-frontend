import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as e } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private http: HttpClient) { }

  findAllConstructionCompanies() {
    return this.http.get(e.API_URL + e.CONSTRUCTION_COMPANY);
  }
}
