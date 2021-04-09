import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedprojectsComponent } from './createdprojects.component';

describe('CreatedprojectsComponent', () => {
  let component: CreatedprojectsComponent;
  let fixture: ComponentFixture<CreatedprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
