import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCityComponent } from './event-city.component';

describe('EventCityComponent', () => {
  let component: EventCityComponent;
  let fixture: ComponentFixture<EventCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
