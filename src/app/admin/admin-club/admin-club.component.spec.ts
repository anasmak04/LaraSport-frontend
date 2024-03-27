import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClubComponent } from './admin-club.component';

describe('AdminClubComponent', () => {
  let component: AdminClubComponent;
  let fixture: ComponentFixture<AdminClubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminClubComponent]
    });
    fixture = TestBed.createComponent(AdminClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
