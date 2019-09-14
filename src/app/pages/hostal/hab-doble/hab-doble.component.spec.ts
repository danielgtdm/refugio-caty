import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabDobleComponent } from './hab-doble.component';

describe('HabDobleComponent', () => {
  let component: HabDobleComponent;
  let fixture: ComponentFixture<HabDobleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabDobleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabDobleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
