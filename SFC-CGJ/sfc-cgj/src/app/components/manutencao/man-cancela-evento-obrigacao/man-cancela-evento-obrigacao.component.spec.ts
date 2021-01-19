import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManCancelaEventoObrigacaoComponent } from './man-cancela-evento-obrigacao.component';

describe('ManCancelaEventoObrigacaoComponent', () => {
  let component: ManCancelaEventoObrigacaoComponent;
  let fixture: ComponentFixture<ManCancelaEventoObrigacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManCancelaEventoObrigacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManCancelaEventoObrigacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
