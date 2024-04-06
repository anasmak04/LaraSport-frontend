import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubtagsComponent } from './clubtags.component';

describe('ClubtagsComponent', () => {
  let component: ClubtagsComponent;
  let fixture: ComponentFixture<ClubtagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubtagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClubtagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
