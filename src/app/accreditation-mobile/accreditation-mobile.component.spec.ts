import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditationMobileComponent } from './accreditation-mobile.component';

describe('AccreditationComponent', () => {
  let component: AccreditationMobileComponent;
  let fixture: ComponentFixture<AccreditationMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccreditationMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccreditationMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
