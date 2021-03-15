import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditationFormEditComponent } from './accreditation-form-edit.component';

describe('AccreditationFormEditComponent', () => {
  let component: AccreditationFormEditComponent;
  let fixture: ComponentFixture<AccreditationFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccreditationFormEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccreditationFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
