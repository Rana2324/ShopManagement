import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatageryComponent } from './catagery.component';

describe('CatageryComponent', () => {
  let component: CatageryComponent;
  let fixture: ComponentFixture<CatageryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatageryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatageryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
