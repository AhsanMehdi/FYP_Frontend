import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonortimelineComponent } from './donortimeline.component';

describe('DonortimelineComponent', () => {
  let component: DonortimelineComponent;
  let fixture: ComponentFixture<DonortimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonortimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonortimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
