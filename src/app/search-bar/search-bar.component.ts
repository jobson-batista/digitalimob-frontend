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

  states: any = [];
  cities: any[] = [];
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
    this.searchService.findAllStates().subscribe((states)=>{
      this.states = states;
    });
    this.cities = this.searchService.findAllCityByState('');
    this.districts = this.searchService.findAllDistrictsByCity('');
  }

  onSubmit(): void {
    console.log(this.searchForm.value);
  }

}
