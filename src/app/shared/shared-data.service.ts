import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private dataShared = new BehaviorSubject<any>([]);

  constructor() { }

  updateData(data: any) {
    this.dataShared.next(data);
  }

  getData(): BehaviorSubject<any> {
    return this.dataShared;
  }
}
