import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopfiveGorillazComponent } from './topfive-gorillaz.component';

describe('TopfiveGorillazComponent', () => {
  let component: TopfiveGorillazComponent;
  let fixture: ComponentFixture<TopfiveGorillazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopfiveGorillazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopfiveGorillazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
