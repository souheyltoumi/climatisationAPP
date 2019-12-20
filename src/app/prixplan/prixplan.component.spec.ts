import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrixplanComponent } from './prixplan.component';

describe('PrixplanComponent', () => {
  let component: PrixplanComponent;
  let fixture: ComponentFixture<PrixplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrixplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrixplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
