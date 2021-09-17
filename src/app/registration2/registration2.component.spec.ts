import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registration2Component } from './registration2.component';

describe('Registration2Component', () => {
  let component: Registration2Component;
  let fixture: ComponentFixture<Registration2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Registration2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Registration2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
