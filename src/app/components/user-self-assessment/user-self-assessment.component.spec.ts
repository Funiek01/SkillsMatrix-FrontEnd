import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSelfAssessmentComponent } from './user-self-assessment.component';

describe('UserSelfAssessmentComponent', () => {
  let component: UserSelfAssessmentComponent;
  let fixture: ComponentFixture<UserSelfAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSelfAssessmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSelfAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
