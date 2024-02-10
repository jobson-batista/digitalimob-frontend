import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CreateService } from './create.service';
import { HttpClientModule } from '@angular/common/http';
import { EnterprisesType } from '../../../enums/EnterprisesType';
import { MatButtonModule } from '@angular/material/button';
import {TextFieldModule} from '@angular/cdk/text-field';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    TextFieldModule,
    NgxMaskDirective
  ],
  providers: [
    CreateService,
    provideNgxMask()
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  constructor(private createService: CreateService) {
  }

  companies: any[] = [];
  resultCompanies: any[] = ['Alliance', 'NEO', 'DaTerra'];
  enterpriseTypes: any[] = Object.values(EnterprisesType);
  formEnterprise = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    constructionName: new FormControl(''),
    enterpriseType: new FormControl(''),
    address: new FormGroup({
      cep: new FormControl(''),
      street: new FormControl(''),
      number: new FormControl(''),
      district: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl('')
    }),
    roomMin: new FormControl(),
    roomMax: new FormControl(),
    sizeMin: new FormControl(),
    sizeMax: new FormControl(),
    suiteMin: new FormControl(),
    suiteMax: new FormControl(),
    garageMin: new FormControl(),
    garageMax: new FormControl(),
    priceMin: new FormControl()
  });

  ngOnInit(): void {
    //console.log(this.enterpriseTypes.filter(type => typeof type != 'number') as string[])
    // this.createService.findAllConstructionCompanies().subscribe({
    //   next: companiesList  => {
    //     this.companies.push(companiesList);
    //     let cont = 0;
    //     this.companies.forEach(c => {
    //       let item: Map<String, String> = new Map<String, String>();
    //       item.set('name',c[cont]['name']);
    //       item.set('id',c[cont]['id']);
    //       this.resultCompanies.push(item);
    //       cont += 1;
    //     });
    //   }, error: error => {
    //     console.log(error);
    //   }
    // });
  }

  formatTypes() {
    let typesFormated: string[] = [];
    for (const type in this.enterpriseTypes.filter(type => typeof type != 'number') as string[]) {
      typesFormated.push((this.enterpriseTypes[type] as string).replace(/_/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));
    }
    return typesFormated;
  }

  onSubmit() {
    console.log(this.formEnterprise.value);
  }

  getAddress() {
    let value = this.formEnterprise.controls['address'].controls['cep'].value;
    if(value !== null && value.length === 8) {
      this.createService.getAddressByCep(value)?.subscribe({
        next: address => {
          console.log(address);
          //this.formEnterprise.controls['address'].controls['street'].setValue();
        }, error: err => {
          console.log(err);
        }
      });
    }
  }

}
