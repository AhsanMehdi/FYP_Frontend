import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsettingComponent } from './nsetting.component';

describe('NsettingComponent', () => {
  let component: NsettingComponent;
  let fixture: ComponentFixture<NsettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NsettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
