import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpInspecionaObrigacaoComponent } from './op-inspeciona-obrigacao.component';

describe('OpInspecionaObrigacaoComponent', () => {
  let component: OpInspecionaObrigacaoComponent;
  let fixture: ComponentFixture<OpInspecionaObrigacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpInspecionaObrigacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpInspecionaObrigacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
