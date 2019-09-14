import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabMatrimonialComponent } from './hab-matrimonial.component';

describe('HabMatrimonialComponent', () => {
  let component: HabMatrimonialComponent;
  let fixture: ComponentFixture<HabMatrimonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabMatrimonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabMatrimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
