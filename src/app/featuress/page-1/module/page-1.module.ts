import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent } from '../slideshow/slideshow.component';
import { TrendingComponent } from '../slideshow/trending/trending.component';
import { OffersofthedayComponent } from '../slideshow/offersoftheday/offersoftheday.component';
import { TopoffersComponent } from '../slideshow/topoffers/topoffers.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    SlideshowComponent,
   TrendingComponent,
   OffersofthedayComponent,
   TopoffersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
        {path:'',component:SlideshowComponent }
    ])

  ]
})
export class Page1Module { }
