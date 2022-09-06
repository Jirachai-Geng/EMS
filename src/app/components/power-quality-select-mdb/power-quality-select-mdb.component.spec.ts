import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerQualitySelectMdbComponent } from './power-quality-select-mdb.component';

describe('PowerQualitySelectMdbComponent', () => {
  let component: PowerQualitySelectMdbComponent;
  let fixture: ComponentFixture<PowerQualitySelectMdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerQualitySelectMdbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerQualitySelectMdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
