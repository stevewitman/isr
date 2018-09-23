import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdImageComponent } from './ad-image.component';

describe('AdImageComponent', () => {
  let component: AdImageComponent;
  let fixture: ComponentFixture<AdImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
