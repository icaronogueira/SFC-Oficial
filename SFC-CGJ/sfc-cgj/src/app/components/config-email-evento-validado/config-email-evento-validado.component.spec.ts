import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigEmailEventoValidadoComponent } from './config-email-evento-validado.component';

describe('ConfigEmailEventoValidadoComponent', () => {
  let component: ConfigEmailEventoValidadoComponent;
  let fixture: ComponentFixture<ConfigEmailEventoValidadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigEmailEventoValidadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigEmailEventoValidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
