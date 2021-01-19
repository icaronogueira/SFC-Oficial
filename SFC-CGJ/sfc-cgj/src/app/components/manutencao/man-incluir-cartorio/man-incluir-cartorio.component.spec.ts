import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManIncluirCartorioComponent } from './man-incluir-cartorio.component';

describe('ManIncluirCartorioComponent', () => {
  let component: ManIncluirCartorioComponent;
  let fixture: ComponentFixture<ManIncluirCartorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManIncluirCartorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManIncluirCartorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
