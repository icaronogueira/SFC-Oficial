import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigUsuariosCGJComponent } from './config-usuarios-cgj.component';

describe('ConfigUsuariosCGJComponent', () => {
  let component: ConfigUsuariosCGJComponent;
  let fixture: ComponentFixture<ConfigUsuariosCGJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigUsuariosCGJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigUsuariosCGJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
