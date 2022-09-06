import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMeterComponent } from './all-meter.component';

describe('AllMeterComponent', () => {
  let component: AllMeterComponent;
  let fixture: ComponentFixture<AllMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
