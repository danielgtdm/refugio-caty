import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostalInicioComponent } from './hostal-inicio.component';

describe('HostalInicioComponent', () => {
  let component: HostalInicioComponent;
  let fixture: ComponentFixture<HostalInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostalInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostalInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
