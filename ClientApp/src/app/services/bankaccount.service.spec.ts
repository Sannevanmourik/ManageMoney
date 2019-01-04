import { TestBed, inject } from '@angular/core/testing';

import { BankaccountService } from './bankaccount.service';

describe('BankaccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankaccountService]
    });
  });

  it('should be created', inject([BankaccountService], (service: BankaccountService) => {
    expect(service).toBeTruthy();
  }));
});
