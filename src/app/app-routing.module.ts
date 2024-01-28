import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideshowComponent } from './featuress/page-1/slideshow/slideshow.component';
import { AlltoursComponent } from './featuress/page-2/alltours/alltours.component';
import { AboutTourComponent } from './featuress/page-3/about-tour/about-tour.component';

const routes: Routes = [ 
  { path: '', component: SlideshowComponent },
  { path: 'tours', component: AlltoursComponent },
  {
    path: 'tour',
    component: AboutTourComponent,
  },];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
