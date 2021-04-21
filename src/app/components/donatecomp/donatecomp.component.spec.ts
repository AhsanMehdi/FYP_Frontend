import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatecompComponent } from './donatecomp.component';

describe('DonatecompComponent', () => {
  let component: DonatecompComponent;
  let fixture: ComponentFixture<DonatecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonatecompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
