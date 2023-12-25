import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResHotelComponent } from './res-hotel.component';

describe('ResHotelComponent', () => {
  let component: ResHotelComponent;
  let fixture: ComponentFixture<ResHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResHotelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
