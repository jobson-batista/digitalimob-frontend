import { Component, HostListener } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarService } from './search-bar.service';
import { State } from '../models/State';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [
    SearchBarService
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  constructor(private searchService: SearchBarService) { }

  states: string[] = [];
  cities: any = [];
  districts: any[] = [];

  priceMin: number = 100000;
  priceMax: number = 100000000;

  advancedSearch: boolean = true;

  searchForm = new FormGroup({
    state: new FormControl(''),
    cities: new FormControl([]),
    districts: new FormControl([]),
    priceMin: new FormControl(),
    priceMax: new FormControl()
  });

  showMoreFilter(): void {
    this.advancedSearch = !this.advancedSearch;
  }

  ngOnInit(): void {
    this.searchService.findAllStates().subscribe({
      next: (states: any) => {
        for (let code in states) {
          this.states.push(states[code]);
        }
      }, error: (err) => {
        console.log(err.error.detail);
      }
    });
    console.log(this.searchForm.get('state'))
    //this.cities = this.searchService.findAllCityByState(this.searchForm.get('state'));
    this.districts = this.searchService.findAllDistrictsByCity('');
  }

  onSubmit(): void {
    console.log(this.searchForm.value);
  }

  onOptionSelected(event: any) {
    const stateControl = this.searchForm.get('state');
    if(stateControl) {
      let value = stateControl.value ?? '';
      this.searchService.findAllCityByState(value)?.subscribe({
        next: cities => {
          this.cities = cities;
        }, error: err => {
          console.log(err);
        }
      });
    }
  }

}
