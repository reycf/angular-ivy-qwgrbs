import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionFormErrorComponent } from './permission-form-error.component';

describe('PermissionFormErrorComponent', () => {
  let component: PermissionFormErrorComponent;
  let fixture: ComponentFixture<PermissionFormErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermissionFormErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionFormErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
