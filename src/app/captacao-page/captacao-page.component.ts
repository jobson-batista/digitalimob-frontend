import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { CardListComponent } from './card-list/card-list.component';

@Component({
  selector: 'app-captacao-page',
  standalone: true,
  imports: [
    MatGridListModule,
    SearchBarComponent,
    CardListComponent
  ],
  templateUrl: './captacao-page.component.html',
  styleUrl: './captacao-page.component.css'
})
export class CaptacaoPageComponent {

}
