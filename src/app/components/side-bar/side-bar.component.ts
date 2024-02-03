import { Component, HostListener } from '@angular/core';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { SideBarService } from './side-bar.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CaptacaoComponent } from '../../pages/captacao/captacao.component';
import { CreateComponent } from '../../pages/enterprise/create/create.component';
import { ContentAreaComponent } from '../content-area/content-area.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CaptacaoComponent,
    CreateComponent,
    RouterModule,
    ContentAreaComponent
  ],
  providers: [
    SideBarService
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

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

  verifyMobile(): boolean {
    this.isMobile = window.innerWidth < 960;
    if (this.isMobile) {
      this.opened = false;
      this.sidenavMode = "over";
      return true;
    } else {
      this.opened = true;
      this.sidenavMode = "side";
      return false;
    }
  }

  closeSideBar() {
    if(this.verifyMobile()) this.opened = false;
  }

}
