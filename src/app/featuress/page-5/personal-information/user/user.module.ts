import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PersonalInformationComponent } from '../personal-information.component';
import { MyTourComponent } from '../my-tour/my-tour.component';
import { MyDataComponent } from '../my-data/my-data.component';
import { CardComponent } from '../my-tour/card/card.component';
import { SavedComponent } from '../saved/saved.component';
import { HistoryComponent } from '../history/history.component';
import { UpdatePasswordComponent } from '../update-password/update-password.component';
import { CreditCardComponent } from '../credit-card/credit-card.component';
import { CreditComponent } from '../credit-card/credit/credit.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


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
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ]
})
export class UserModule { }
