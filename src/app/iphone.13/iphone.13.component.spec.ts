import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iphone.13Component } from './iphone.13.component';

describe('Iphone.13Component', () => {
  let component: Iphone.13Component;
  let fixture: ComponentFixture<Iphone.13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iphone.13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iphone.13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
