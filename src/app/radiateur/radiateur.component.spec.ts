import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiateurComponent } from './radiateur.component';

describe('RadiateurComponent', () => {
  let component: RadiateurComponent;
  let fixture: ComponentFixture<RadiateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
