import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatenowComponent } from './donatenow.component';

describe('DonatenowComponent', () => {
  let component: DonatenowComponent;
  let fixture: ComponentFixture<DonatenowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonatenowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatenowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
