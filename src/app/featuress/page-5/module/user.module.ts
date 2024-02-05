import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PersonalInformationComponent } from '../personal-information/personal-information.component';
import { MyTourComponent } from '../personal-information/my-tour/my-tour.component';
import { MyDataComponent } from '../personal-information/my-data/my-data.component';
import { CardComponent } from '../personal-information/my-tour/card/card.component';
import { SavedComponent } from '../personal-information/saved/saved.component';
import { HistoryComponent } from '../personal-information/history/history.component';
import { UpdatePasswordComponent } from '../personal-information/update-password/update-password.component';
import { CreditCardComponent } from '../personal-information/credit-card/credit-card.component';
import { CreditComponent } from '../personal-information/credit-card/credit/credit.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
        PersonalInformationComponent,
    MyTourComponent,
    MyDataComponent,
    CardComponent,
    SavedComponent,
    HistoryComponent,
    UpdatePasswordComponent,
    CreditCardComponent,
    CreditComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
    
  ]
})
export class UserModule { }
