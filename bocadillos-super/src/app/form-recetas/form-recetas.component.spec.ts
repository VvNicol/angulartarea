import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRecetasComponent } from './form-recetas.component';

describe('FormRecetasComponent', () => {
  let component: FormRecetasComponent;
  let fixture: ComponentFixture<FormRecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRecetasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
