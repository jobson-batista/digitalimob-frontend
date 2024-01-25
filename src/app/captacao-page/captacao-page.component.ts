import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-captacao-page',
  standalone: true,
  imports: [
    MatGridListModule,
    SearchBarComponent
  ],
  templateUrl: './captacao-page.component.html',
  styleUrl: './captacao-page.component.css'
})
export class CaptacaoPageComponent {

}
