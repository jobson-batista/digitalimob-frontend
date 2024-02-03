import { Component, HostListener, Renderer2 } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Enterprise } from '../../../models/Enterprise';
import { ActivatedRoute, Router } from '@angular/router';
import { MapComponent } from '../../../components/map/map.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatInputModule,
    MapComponent,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  cols: number = 1;
  rowHeight: string = '45em';
  isMobile: boolean = false;
  enterprise: any;
  viewForm: FormGroup = new FormGroup({
    address: new FormControl(''),
    district: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    price: new FormControl(''),
    pricem2: new FormControl(''),
    area: new FormControl(''),
    room: new FormControl(''),
    type: new FormControl('')
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private renderer: Renderer2
  ) {
    this.enterprise = history.state;
    this.renderer.setProperty(document.body, 'scrollTop', 0);
    document.body.scrollTop = 0;
  }

  ngOnInit() {
    this.createForm(history.state);
    window.scrollTo({ top: 0, behavior: 'instant' });
    this.verifyMobile();
    this.renderer.setProperty(document.body, 'scrollTop', 0);
  }

  createForm(ent: Enterprise) {
    this.viewForm = new FormGroup({
      address: new FormControl(this.enterprise.address.street + ' ' + this.enterprise.address.number),
      district: new FormControl(this.enterprise.address.district),
      city: new FormControl(this.enterprise.address.city),
      state: new FormControl(this.enterprise.address.state),
      price: new FormControl(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.enterprise.priceMin)),
      pricem2: new FormControl(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.enterprise.priceM2)),
      area: new FormControl(this.enterprise.sizeMin),
      room: new FormControl(this.enterprise.roomMin),
      type: new FormControl(this.enterprise.type)
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.verifyMobile();
  }

  verifyMobile() {
    this.isMobile = window.innerWidth <= 960;
    if (this.isMobile) {
      this.cols = 1;
      this.rowHeight = '45em';
    } else {
      this.cols = 2;
      this.rowHeight = '30em';
    }
  }

}
