import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigEmailEventoRejeitadoComponent } from './config-email-evento-rejeitado.component';

describe('ConfigEmailEventoRejeitadoComponent', () => {
  let component: ConfigEmailEventoRejeitadoComponent;
  let fixture: ComponentFixture<ConfigEmailEventoRejeitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigEmailEventoRejeitadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigEmailEventoRejeitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
