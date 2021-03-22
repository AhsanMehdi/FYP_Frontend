import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtimelineComponent } from './ngtimeline.component';

describe('NgtimelineComponent', () => {
  let component: NgtimelineComponent;
  let fixture: ComponentFixture<NgtimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgtimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgtimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
