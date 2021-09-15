import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionaservicoComponent } from './adicionaservico.component';

describe('AdicionaservicoComponent', () => {
  let component: AdicionaservicoComponent;
  let fixture: ComponentFixture<AdicionaservicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionaservicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionaservicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
