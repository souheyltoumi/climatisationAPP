import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrixradComponent } from './prixrad.component';

describe('PrixradComponent', () => {
  let component: PrixradComponent;
  let fixture: ComponentFixture<PrixradComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrixradComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrixradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
