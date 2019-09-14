import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceraEdadComponent } from './tercera-edad.component';

describe('TerceraEdadComponent', () => {
  let component: TerceraEdadComponent;
  let fixture: ComponentFixture<TerceraEdadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceraEdadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceraEdadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
