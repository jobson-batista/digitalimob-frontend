import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptacaoComponent } from './captacao.component';

describe('CaptacaoComponent', () => {
  let component: CaptacaoComponent;
  let fixture: ComponentFixture<CaptacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaptacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaptacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
