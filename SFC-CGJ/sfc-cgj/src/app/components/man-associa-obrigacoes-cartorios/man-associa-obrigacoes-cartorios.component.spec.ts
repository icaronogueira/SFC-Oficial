import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManAssociaObrigacoesCartoriosComponent } from './man-associa-obrigacoes-cartorios.component';

describe('ManAssociaObrigacoesCartoriosComponent', () => {
  let component: ManAssociaObrigacoesCartoriosComponent;
  let fixture: ComponentFixture<ManAssociaObrigacoesCartoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManAssociaObrigacoesCartoriosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManAssociaObrigacoesCartoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
