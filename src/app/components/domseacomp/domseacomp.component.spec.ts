import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomseacompComponent } from './domseacomp.component';

describe('DomseacompComponent', () => {
  let component: DomseacompComponent;
  let fixture: ComponentFixture<DomseacompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomseacompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomseacompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
