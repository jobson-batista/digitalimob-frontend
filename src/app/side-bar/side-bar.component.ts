import { Component, HostListener } from '@angular/core';
import { MatDrawer, MatDrawerMode, MatSidenavModule} from '@angular/material/sidenav';
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

  opened: boolean = window.innerWidth < 960;
  isMobile: boolean = window.innerWidth < 960;
  sidenavMode: MatDrawerMode = 'side';

  username: string = 'Jobson Batista';

  ngOnInit() {
    this.verifyMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.verifyMobile();
  }

  verifyMobile() {
    this.isMobile = window.innerWidth < 960;
    if(this.isMobile) {
      this.opened = false;
      this.sidenavMode = "over";
    } else {
      this.opened = true;
      this.sidenavMode = "side";
    }
  }
  
}
