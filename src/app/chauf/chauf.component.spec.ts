import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaufComponent } from './chauf.component';

describe('ChaufComponent', () => {
  let component: ChaufComponent;
  let fixture: ComponentFixture<ChaufComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaufComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
