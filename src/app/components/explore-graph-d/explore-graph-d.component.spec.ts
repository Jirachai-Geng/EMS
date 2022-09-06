import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreGraphDComponent } from './explore-graph-d.component';

describe('ExploreGraphDComponent', () => {
  let component: ExploreGraphDComponent;
  let fixture: ComponentFixture<ExploreGraphDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreGraphDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreGraphDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
