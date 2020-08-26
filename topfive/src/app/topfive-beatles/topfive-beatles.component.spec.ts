import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopfiveBeatlesComponent } from './topfive-beatles.component';

describe('TopfiveBeatlesComponent', () => {
  let component: TopfiveBeatlesComponent;
  let fixture: ComponentFixture<TopfiveBeatlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopfiveBeatlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopfiveBeatlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
