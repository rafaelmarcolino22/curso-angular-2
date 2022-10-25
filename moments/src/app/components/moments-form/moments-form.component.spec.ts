import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentsFormComponent } from './moments-form.component';

describe('MomentsFormComponent', () => {
  let component: MomentsFormComponent;
  let fixture: ComponentFixture<MomentsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomentsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
