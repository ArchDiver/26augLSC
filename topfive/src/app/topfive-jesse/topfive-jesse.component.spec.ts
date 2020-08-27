import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JesseComponent } from './topfive-jesse.component';

describe('JesseComponent', () => {
  let component: JesseComponent;
  let fixture: ComponentFixture<JesseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JesseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JesseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
