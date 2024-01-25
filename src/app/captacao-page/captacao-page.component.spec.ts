import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptacaoPageComponent } from './captacao-page.component';

describe('CaptacaoPageComponent', () => {
  let component: CaptacaoPageComponent;
  let fixture: ComponentFixture<CaptacaoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaptacaoPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaptacaoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
