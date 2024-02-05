import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AboutTourComponent } from '../about-tour/about-tour.component';



@NgModule({
  declarations: [
    AboutTourComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component:  AboutTourComponent }]),
  ]
})
export class Page3Module { }
