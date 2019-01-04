import { BankaccountService } from './../../services/bankaccount.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BankAccount } from 'src/app/models/BankAccount';
import { EBankAccountTypes } from 'src/app/enums/EBankAccountTypes';

@Component({
  selector: 'app-bankaccount-overview',
  templateUrl: './bankaccount-overview.component.html',
  styleUrls: ['./bankaccount-overview.component.css']
})
export class BankaccountOverviewComponent implements OnInit, OnDestroy {

  subscription:  Subscription;
  bankAccounts: BankAccount[];
  EBankAccountTypes = EBankAccountTypes;

  constructor (private service: BankaccountService) { }



  ngOnInit() {
    this.subscription = this.service.getAll().subscribe(
      results => {
        console.log('Retrieved films!', results);
        this.bankAccounts = results;
      },
      (error) => {
        console.error('Failed ', error);
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
