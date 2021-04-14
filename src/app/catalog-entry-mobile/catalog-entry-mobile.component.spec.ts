import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogEntryMobileComponent } from './catalog-entry-mobile.component';

describe('CatalogEntryMobileComponent', () => {
  let component: CatalogEntryMobileComponent;
  let fixture: ComponentFixture<CatalogEntryMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogEntryMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogEntryMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
