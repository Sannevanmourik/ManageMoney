import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BankaccountOverviewComponent } from './components/bankaccount-overview/bankaccount-overview.component';
import { BankaccountService } from './services/bankaccount.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EnumAsStringPipe } from './pipes/enum-as-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BankaccountOverviewComponent,
    HeaderComponent,
    FooterComponent,
    EnumAsStringPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [BankaccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
