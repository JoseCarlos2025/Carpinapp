import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketComponent } from './views/market/market.component';
import { BudgetComponent } from './views/budget/budget.component';
import { PorfileComponent } from './views/porfile/porfile.component';
import { LoginComponent } from './views/login/login.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'singup', component: SingupComponent },
  { path: 'market', component: MarketComponent },
  { path: 'budget', component: BudgetComponent },
  { path: 'porfile', component: PorfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
