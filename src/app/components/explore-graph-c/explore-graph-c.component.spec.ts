import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreGraphCComponent } from './explore-graph-c.component';

describe('ExploreGraphCComponent', () => {
  let component: ExploreGraphCComponent;
  let fixture: ComponentFixture<ExploreGraphCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreGraphCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreGraphCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
