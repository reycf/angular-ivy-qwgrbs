import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditationUnitsComponent } from './accreditation-units.component';

describe('AccreditationUnitsComponent', () => {
  let component: AccreditationUnitsComponent;
  let fixture: ComponentFixture<AccreditationUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccreditationUnitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccreditationUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


