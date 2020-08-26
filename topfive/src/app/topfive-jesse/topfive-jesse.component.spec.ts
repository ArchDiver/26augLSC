import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopfiveJesseComponent } from './topfive-jesse.component';

describe('TopfiveJesseComponent', () => {
  let component: TopfiveJesseComponent;
  let fixture: ComponentFixture<TopfiveJesseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopfiveJesseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopfiveJesseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
