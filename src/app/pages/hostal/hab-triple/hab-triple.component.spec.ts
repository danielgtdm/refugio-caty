import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabTripleComponent } from './hab-triple.component';

describe('HabTripleComponent', () => {
  let component: HabTripleComponent;
  let fixture: ComponentFixture<HabTripleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabTripleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabTripleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
