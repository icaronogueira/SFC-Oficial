import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManConsultarEditarCartorioComponent } from './man-consultar-editar-cartorio.component';

describe('ManConsultarEditarCartorioComponent', () => {
  let component: ManConsultarEditarCartorioComponent;
  let fixture: ComponentFixture<ManConsultarEditarCartorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManConsultarEditarCartorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManConsultarEditarCartorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
