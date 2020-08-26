import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopfiveHomeComponent } from './topfive-home.component';

describe('TopfiveHomeComponent', () => {
  let component: TopfiveHomeComponent;
  let fixture: ComponentFixture<TopfiveHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopfiveHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopfiveHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
