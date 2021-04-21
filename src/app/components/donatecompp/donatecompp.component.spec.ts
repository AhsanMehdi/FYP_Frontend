import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatecomppComponent } from './donatecompp.component';

describe('DonatecomppComponent', () => {
  let component: DonatecomppComponent;
  let fixture: ComponentFixture<DonatecomppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonatecomppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatecomppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
