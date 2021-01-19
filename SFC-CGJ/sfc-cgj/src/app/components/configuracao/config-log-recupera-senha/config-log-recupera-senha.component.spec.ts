import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigLogRecuperaSenhaComponent } from './config-log-recupera-senha.component';

describe('ConfigLogRecuperaSenhaComponent', () => {
  let component: ConfigLogRecuperaSenhaComponent;
  let fixture: ComponentFixture<ConfigLogRecuperaSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigLogRecuperaSenhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigLogRecuperaSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
