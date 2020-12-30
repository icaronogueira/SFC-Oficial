import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManOficiaisComponent } from './man-oficiais.component';

describe('ManOficiaisComponent', () => {
  let component: ManOficiaisComponent;
  let fixture: ComponentFixture<ManOficiaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManOficiaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManOficiaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
