import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iphone.12Component } from './iphone.12.component';

describe('Iphone.12Component', () => {
  let component: Iphone.12Component;
  let fixture: ComponentFixture<Iphone.12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iphone.12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iphone.12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
