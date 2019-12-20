import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrixclimComponent } from './prixclim.component';

describe('PrixclimComponent', () => {
  let component: PrixclimComponent;
  let fixture: ComponentFixture<PrixclimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrixclimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrixclimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
