import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManCartoriosComponent } from './man-cartorios.component';

describe('ManCartoriosComponent', () => {
  let component: ManCartoriosComponent;
  let fixture: ComponentFixture<ManCartoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManCartoriosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManCartoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
