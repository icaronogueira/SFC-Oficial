import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManIncluiObrigacoesAnuaisComponent } from './man-inclui-obrigacoes-anuais.component';

describe('ManIncluiObrigacoesAnuaisComponent', () => {
  let component: ManIncluiObrigacoesAnuaisComponent;
  let fixture: ComponentFixture<ManIncluiObrigacoesAnuaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManIncluiObrigacoesAnuaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManIncluiObrigacoesAnuaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
