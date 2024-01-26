import { Component, HostListener } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  isMobile: boolean = false;
  colsGrid: number = 2;

  enterpriseList: any[] = [
    {
      contrutora: "NEO Empreendimentos",
      nome: "RIO BY NEO",
      imgUrl: "https://www.neoempreendimentos.com.br/wp-content/uploads/2022/11/RIO-BY-NEO-FACHADA-NASCENTE-01-3-1920x1422.jpg",
      sizeMin: 24,
      sizeMax: 60,
      priceMin: 980000
    },
    {
      contrutora: "NEO Empreendimentos",
      nome: "RIO BY NEO",
      imgUrl: "https://www.neoempreendimentos.com.br/wp-content/uploads/2022/11/RIO-BY-NEO-FACHADA-NASCENTE-01-3-1920x1422.jpg",
      sizeMin: 24,
      sizeMax: 60,
      priceMin: 980000
    },
    {
      contrutora: "NEO Empreendimentos",
      nome: "RIO BY NEO",
      imgUrl: "https://www.neoempreendimentos.com.br/wp-content/uploads/2022/11/RIO-BY-NEO-FACHADA-NASCENTE-01-3-1920x1422.jpg",
      sizeMin: 24,
      sizeMax: 60,
      priceMin: 980000
    },
    {
      contrutora: "NEO Empreendimentos",
      nome: "RIO BY NEO",
      imgUrl: "https://www.neoempreendimentos.com.br/wp-content/uploads/2022/11/RIO-BY-NEO-FACHADA-NASCENTE-01-3-1920x1422.jpg",
      sizeMin: 24,
      sizeMax: 60,
      priceMin: 980000
    }
  ]

  constructor() { }

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
      this.colsGrid = 1;
    } else if (!this.isMobile && window.innerWidth < 1280){
      this.colsGrid = 2;
    } else {
      this.colsGrid = 3;
    }
  }
}
