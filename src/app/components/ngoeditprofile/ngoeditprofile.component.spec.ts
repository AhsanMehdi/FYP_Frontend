import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoeditprofileComponent } from './ngoeditprofile.component';

describe('NgoeditprofileComponent', () => {
  let component: NgoeditprofileComponent;
  let fixture: ComponentFixture<NgoeditprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoeditprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoeditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
