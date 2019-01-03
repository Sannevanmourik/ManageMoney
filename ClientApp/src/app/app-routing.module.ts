import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankaccountOverviewComponent } from './components/bankaccount-overview/bankaccount-overview.component';

const routes: Routes = [
  { path: 'bankaccount-overview', component: BankaccountOverviewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}