import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarAtendimentoComponent } from './adicionar-atendimento.component';

describe('AdicionarAtendimentoComponent', () => {
  let component: AdicionarAtendimentoComponent;
  let fixture: ComponentFixture<AdicionarAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarAtendimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
