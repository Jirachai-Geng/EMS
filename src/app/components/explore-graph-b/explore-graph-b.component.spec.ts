import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreGraphBComponent } from './explore-graph-b.component';

describe('ExploreGraphBComponent', () => {
  let component: ExploreGraphBComponent;
  let fixture: ComponentFixture<ExploreGraphBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreGraphBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreGraphBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
