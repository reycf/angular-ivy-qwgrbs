import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyActionsComponent } from './key-actions.component';

describe('KeyActionsComponent', () => {
  let component: KeyActionsComponent;
  let fixture: ComponentFixture<KeyActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
