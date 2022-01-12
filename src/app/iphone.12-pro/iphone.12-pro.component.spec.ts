import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iphone.12ProComponent } from './iphone.12-pro.component';

describe('Iphone.12ProComponent', () => {
  let component: Iphone.12ProComponent;
  let fixture: ComponentFixture<Iphone.12ProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iphone.12ProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iphone.12ProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
