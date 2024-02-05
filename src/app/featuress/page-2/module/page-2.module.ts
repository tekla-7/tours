import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlltoursComponent } from '../alltours/alltours.component';
import { TourCardComponent } from '../alltours/tour-card/tour-card.component';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AlltoursComponent, TourCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: AlltoursComponent }]),
  ],
})
export class Page2Module {}
