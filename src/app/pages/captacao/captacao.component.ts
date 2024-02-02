import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CardListComponent } from './card-list/card-list.component';

@Component({
  selector: 'app-captacao',
  standalone: true,
  imports: [
    MatGridListModule,
    SearchBarComponent,
    CardListComponent
  ],
  templateUrl: './captacao.component.html',
  styleUrl: './captacao.component.css'
})
export class CaptacaoComponent {

}
