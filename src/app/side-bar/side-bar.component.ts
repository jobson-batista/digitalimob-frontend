import { Component, HostListener } from '@angular/core';
import { MatSidenavModule} from '@angular/material/sidenav';
import { SideBarService } from './side-bar.service';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CaptacaoPageComponent } from '../captacao-page/captacao-page.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CaptacaoPageComponent
  ],
  providers: [
    SideBarService
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent  {

  opened: boolean = window.innerWidth > 800;
  username: string = 'Jobson Batista';

  ngOnInit() {
    this.opened = window.innerWidth > 800;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.opened = window.innerWidth > 800;
  }
  
}
