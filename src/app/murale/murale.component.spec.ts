import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuraleComponent } from './murale.component';

describe('MuraleComponent', () => {
  let component: MuraleComponent;
  let fixture: ComponentFixture<MuraleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuraleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
