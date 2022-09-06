import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreGraphAComponent } from './explore-graph-a.component';

describe('ExploreGraphAComponent', () => {
  let component: ExploreGraphAComponent;
  let fixture: ComponentFixture<ExploreGraphAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreGraphAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreGraphAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
