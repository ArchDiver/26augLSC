import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopfiveRayComponent } from './topfive-ray.component';

describe('TopfiveRayComponent', () => {
  let component: TopfiveRayComponent;
  let fixture: ComponentFixture<TopfiveRayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopfiveRayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopfiveRayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
