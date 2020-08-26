import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopfiveOtisComponent } from './topfive-otis.component';

describe('TopfiveOtisComponent', () => {
  let component: TopfiveOtisComponent;
  let fixture: ComponentFixture<TopfiveOtisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopfiveOtisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopfiveOtisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
