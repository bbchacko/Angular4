import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment1127Component } from './assignment1127.component';

describe('Assignment1127Component', () => {
  let component: Assignment1127Component;
  let fixture: ComponentFixture<Assignment1127Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment1127Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment1127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
