import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankaccountOverviewComponent } from './bankaccount-overview.component';

describe('BankaccountOverviewComponent', () => {
  let component: BankaccountOverviewComponent;
  let fixture: ComponentFixture<BankaccountOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankaccountOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankaccountOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
