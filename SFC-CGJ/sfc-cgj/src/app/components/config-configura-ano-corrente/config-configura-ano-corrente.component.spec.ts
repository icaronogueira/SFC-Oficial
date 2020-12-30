import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigConfiguraAnoCorrenteComponent } from './config-configura-ano-corrente.component';

describe('ConfigConfiguraAnoCorrenteComponent', () => {
  let component: ConfigConfiguraAnoCorrenteComponent;
  let fixture: ComponentFixture<ConfigConfiguraAnoCorrenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigConfiguraAnoCorrenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigConfiguraAnoCorrenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
