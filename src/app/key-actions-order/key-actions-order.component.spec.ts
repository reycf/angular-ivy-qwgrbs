import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyActionsOrderComponent } from './key-actions-order.component';

describe('KeyActionsOrderComponent', () => {
  let component: KeyActionsOrderComponent;
  let fixture: ComponentFixture<KeyActionsOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyActionsOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyActionsOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
