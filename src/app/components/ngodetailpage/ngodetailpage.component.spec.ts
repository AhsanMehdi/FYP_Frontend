import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgodetailpageComponent } from './ngodetailpage.component';

describe('NgodetailpageComponent', () => {
  let component: NgodetailpageComponent;
  let fixture: ComponentFixture<NgodetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgodetailpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgodetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
