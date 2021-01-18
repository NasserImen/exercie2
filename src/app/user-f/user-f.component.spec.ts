import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFComponent } from './user-f.component';

describe('UserFComponent', () => {
  let component: UserFComponent;
  let fixture: ComponentFixture<UserFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
