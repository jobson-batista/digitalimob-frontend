import { Component } from '@angular/core';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarService } from './search-bar.service';
import { SharedDataService } from '../../../shared/shared-data.service';

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

  constructor(
    private searchService: SearchBarService,
    private sharedDataService: SharedDataService
    ) { }

  states: string[] = [];
  cities: any = [];
  districts: any = [];

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
        console.log(err);
      }
    });
  }

  onSubmit(): void {
    this.searchService.search(this.searchForm.value).subscribe({
      next: (result) => {
        this.sharedDataService.updateData(result);
      }, error: err => {
        console.log(err);
      }
    });
  }

  onOptionSelected(event: MatSelectChange, fieldForm: string) {
    if (fieldForm === 'state') {
      const stateControl = this.searchForm.get('state');
      if (stateControl) {
        let value = stateControl.value ?? '';
        this.searchService.findAllCityByState(value)?.subscribe({
          next: cities => {
            this.cities = cities;
          }, error: err => {
            console.log(err);
          }
        });
      }
    } else if(fieldForm === 'city') {
      const stateControl = this.searchForm.get('state');
      const cityControl = this.searchForm.get('cities');
      if(cityControl && stateControl) {
        let state = stateControl.value ?? '';
        let cities = cityControl.value ?? [''];
        this.searchService.findAllDistrictsByCity(state, cities).subscribe({
          next: districts => {
            this.districts = districts;
          }, error: err => {
            console.log(err);
          }
        });
      }
    }
  }

}
