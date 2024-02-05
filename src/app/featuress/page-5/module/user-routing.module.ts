import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInformationComponent } from '../personal-information/personal-information.component';
import { MyTourComponent } from '../personal-information/my-tour/my-tour.component';
import { MyDataComponent } from '../personal-information/my-data/my-data.component';
import { SavedComponent } from '../personal-information/saved/saved.component';
import { HistoryComponent } from '../personal-information/history/history.component';
import { UpdatePasswordComponent } from '../personal-information/update-password/update-password.component';
import { CreditCardComponent } from '../personal-information/credit-card/credit-card.component';
import { loginGuard } from '../../../core/guard-pipe/login.guard';

const routes: Routes = [
  {path:'', component:PersonalInformationComponent, children:[
    {path:'my-tour',component:MyTourComponent},
    {path:'my-data',component:MyDataComponent},
    {path:'saved',component:SavedComponent},
    {path:'history',component:HistoryComponent},
    {path:'update-password',component:UpdatePasswordComponent},
    {path:'credit-card',component:CreditCardComponent},
  ] ,canActivate: [loginGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
