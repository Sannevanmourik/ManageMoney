import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankaccountOverviewComponent } from './components/bankaccount-overview/bankaccount-overview.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: 'bankaccount-overview', component: BankaccountOverviewComponent },
  { path: 'home', component: HomepageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}