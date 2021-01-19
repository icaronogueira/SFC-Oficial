import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelPendentesObrigacaoEventoComponent } from './rel-pendentes-obrigacao-evento.component';

describe('RelPendentesObrigacaoEventoComponent', () => {
  let component: RelPendentesObrigacaoEventoComponent;
  let fixture: ComponentFixture<RelPendentesObrigacaoEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelPendentesObrigacaoEventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelPendentesObrigacaoEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
