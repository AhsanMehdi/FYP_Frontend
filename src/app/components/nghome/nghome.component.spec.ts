import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NghomeComponent } from './nghome.component';

describe('NghomeComponent', () => {
  let component: NghomeComponent;
  let fixture: ComponentFixture<NghomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NghomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
