import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditationRenewComponent } from './accreditation-renew.component';

describe('AccreditationRenewComponent', () => {
  let component: AccreditationRenewComponent;
  let fixture: ComponentFixture<AccreditationRenewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccreditationRenewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccreditationRenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
