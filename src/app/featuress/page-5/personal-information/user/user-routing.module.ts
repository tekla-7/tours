import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInformationComponent } from '../personal-information.component';
import { MyTourComponent } from '../my-tour/my-tour.component';
import { MyDataComponent } from '../my-data/my-data.component';
import { SavedComponent } from '../saved/saved.component';
import { HistoryComponent } from '../history/history.component';
import { UpdatePasswordComponent } from '../update-password/update-password.component';
import { CreditCardComponent } from '../credit-card/credit-card.component';
import { loginGuard } from '../../../../core/login.guard';

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
