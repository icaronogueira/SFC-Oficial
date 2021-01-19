import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelPendentesObrigacaoPeriodoComponent } from './rel-pendentes-obrigacao-periodo.component';

describe('RelPendentesObrigacaoPeriodoComponent', () => {
  let component: RelPendentesObrigacaoPeriodoComponent;
  let fixture: ComponentFixture<RelPendentesObrigacaoPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelPendentesObrigacaoPeriodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelPendentesObrigacaoPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
