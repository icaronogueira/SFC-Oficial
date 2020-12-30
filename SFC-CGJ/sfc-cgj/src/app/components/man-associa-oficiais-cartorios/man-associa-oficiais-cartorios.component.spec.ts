import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManAssociaOficiaisCartoriosComponent } from './man-associa-oficiais-cartorios.component';

describe('ManAssociaOficiaisCartoriosComponent', () => {
  let component: ManAssociaOficiaisCartoriosComponent;
  let fixture: ComponentFixture<ManAssociaOficiaisCartoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManAssociaOficiaisCartoriosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManAssociaOficiaisCartoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
