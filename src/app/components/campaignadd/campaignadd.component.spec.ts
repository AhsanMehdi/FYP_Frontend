import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignaddComponent } from './campaignadd.component';

describe('CampaignaddComponent', () => {
  let component: CampaignaddComponent;
  let fixture: ComponentFixture<CampaignaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
