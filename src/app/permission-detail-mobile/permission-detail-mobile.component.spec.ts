import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionDetailMobile } from './permission-detail-mobile.component';

describe('PermissionDetailMobile', () => {
  let component: PermissionDetailMobile;
  let fixture: ComponentFixture<PermissionDetailMobile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermissionDetailMobile ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionDetailMobile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
