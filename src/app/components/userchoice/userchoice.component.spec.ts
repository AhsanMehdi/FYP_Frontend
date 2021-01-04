import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserchoiceComponent } from './userchoice.component';

describe('UserchoiceComponent', () => {
  let component: UserchoiceComponent;
  let fixture: ComponentFixture<UserchoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserchoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserchoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

