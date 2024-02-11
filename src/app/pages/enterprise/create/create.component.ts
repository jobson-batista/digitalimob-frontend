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
import { StatesBrazil } from '../../../enums/StatesBrazil';
import { ToastModule as primeng } from 'primeng/toast';
import { MessageService } from 'primeng/api';

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
    NgxMaskDirective,
    primeng
  ],
  providers: [
    CreateService,
    provideNgxMask(),
    MessageService
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  constructor(
    private createService: CreateService,
    private messageService: MessageService
    ) {
  }

  companies: any[] = [];
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
    this.createService.findAllConstructionCompanies().subscribe({
      next: (companiesList: any)  => {
        for(let c in companiesList) {
          if(!this.companies.includes(companiesList[c].name)) {
            this.companies.push(companiesList[c].name);
          }
        }
        console.log(this.companies);
      }, error: error => {
        console.log(error);
      }
    });
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
        next: (address: any) => {
          this.formEnterprise.controls['address'].controls['city'].setValue(address.localidade);
          this.formEnterprise.controls['address'].controls['district'].setValue(address.bairro);
          this.formEnterprise.controls['address'].controls['street'].setValue(address.logradouro);
          let state: StatesBrazil = new StatesBrazil();
          this.formEnterprise.controls['address'].controls['state'].setValue(state.getNameByUF(address.uf));
        }, error: err => {
          console.log(err);
        }
      });
    }
  }

  showToast() {
    this.messageService.add({severity: 'success', summary: 'Sucesso!', detail: 'Cadastrado com Sucesso!'})
  }
}
