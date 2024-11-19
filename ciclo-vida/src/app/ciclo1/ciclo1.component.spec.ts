import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ciclo1Component } from './ciclo1.component';

describe('Ciclo1Component', () => {
  let component: Ciclo1Component;
  let fixture: ComponentFixture<Ciclo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ciclo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ciclo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
