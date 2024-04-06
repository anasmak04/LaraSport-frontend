import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubResultComponent } from './club-result.component';

describe('ClubResultComponent', () => {
  let component: ClubResultComponent;
  let fixture: ComponentFixture<ClubResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClubResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
