import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedcampaignsComponent } from './createdcampaigns.component';

describe('CreatedcampaignsComponent', () => {
  let component: CreatedcampaignsComponent;
  let fixture: ComponentFixture<CreatedcampaignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedcampaignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedcampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
