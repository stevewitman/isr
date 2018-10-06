import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NwsForecastComponent } from './nws-forecast.component';

describe('NwsForecastComponent', () => {
  let component: NwsForecastComponent;
  let fixture: ComponentFixture<NwsForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NwsForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NwsForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
