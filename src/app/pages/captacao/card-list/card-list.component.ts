import { Component, HostListener } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardListService } from './card-list-service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedDataService } from '../../../shared/shared-data.service';
import { Router } from '@angular/router';
import { Enterprise } from '../../../models/Enterprise';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  providers: [
    CardListService
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  isMobile: boolean = false;
  colsGrid: number = 2;
  enterpriseList: any = [];
  loading: boolean = true;

  constructor(
    private service: CardListService,
    private sharedDataService: SharedDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.verifyMobile();
    this.service.findEnterprises().subscribe({
      next: (enterprises) => {
        this.enterpriseList = enterprises;
        this.loading = false;
      }, error: (err) => {
        console.log(err.error.detail);
      }
    });
    this.sharedDataService.getData().subscribe({
      next: (result) => {
        this.enterpriseList = result;
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.verifyMobile();
  }

  verifyMobile() {
    this.isMobile = window.innerWidth < 960;
    if (this.isMobile) {
      this.colsGrid = 1;
    } else if (!this.isMobile && window.innerWidth < 1280) {
      this.colsGrid = 2;
    } else {
      this.colsGrid = 3;
    }
  }

  toDetails(enterprise: Enterprise) {
    this.router.navigate(['detalhes-do-empreendimento'], { state: enterprise });
  }
}
