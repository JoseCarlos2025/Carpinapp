import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabMenuComponent } from './menu/tab-menu/tab-menu.component';
import { MarketComponent } from './views/market/market.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BudgetComponent } from './views/budget/budget.component';
import { PorfileComponent } from './views/porfile/porfile.component';
import { LoginComponent } from './views/login/login.component';
import { SingupComponent } from './singup/singup.component';

@NgModule({
  declarations: [
    AppComponent,
    TabMenuComponent,
    MarketComponent,
    BudgetComponent,
    PorfileComponent,
    LoginComponent,
    SingupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
