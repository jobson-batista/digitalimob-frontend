import { Component } from '@angular/core';
import { CaptacaoComponent } from '../../pages/captacao/captacao.component';
import { CreateComponent } from '../../pages/enterprise/create/create.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content-area',
  standalone: true,
  imports: [
    CaptacaoComponent,
    CreateComponent,
    RouterOutlet
  ],
  templateUrl: './content-area.component.html',
  styleUrl: './content-area.component.css'
})
export class ContentAreaComponent {

}
