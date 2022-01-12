import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iphone.13ProComponent } from './iphone.13-pro.component';

describe('Iphone.13ProComponent', () => {
  let component: Iphone.13ProComponent;
  let fixture: ComponentFixture<Iphone.13ProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iphone.13ProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iphone.13ProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
