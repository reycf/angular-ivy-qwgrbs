import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditationFormMobileComponent } from './accreditation-form-mobile.component';

describe('AccreditationFormEditComponent', () => {
  let component: AccreditationFormMobileComponent;
  let fixture: ComponentFixture<AccreditationFormMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccreditationFormMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccreditationFormMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
