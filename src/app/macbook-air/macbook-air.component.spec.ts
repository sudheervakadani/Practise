import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacbookAirComponent } from './macbook-air.component';

describe('MacbookAirComponent', () => {
  let component: MacbookAirComponent;
  let fixture: ComponentFixture<MacbookAirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacbookAirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacbookAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
