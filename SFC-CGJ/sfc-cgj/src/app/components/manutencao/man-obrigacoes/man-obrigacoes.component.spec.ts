import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManObrigacoesComponent } from './man-obrigacoes.component';

describe('ManObrigacoesComponent', () => {
  let component: ManObrigacoesComponent;
  let fixture: ComponentFixture<ManObrigacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManObrigacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManObrigacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
