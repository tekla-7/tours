import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideshowComponent } from './featuress/page-1/slideshow/slideshow.component';
import { AlltoursComponent } from './featuress/page-2/alltours/alltours.component';
import { AboutTourComponent } from './featuress/page-3/about-tour/about-tour.component';
import { RegistrationComponent } from './featuress/page-4/registration/registration.component';
import { AuthorizationComponent } from './featuress/page-4/authorization/authorization.component';
import { PersonalInformationComponent } from './featuress/page-5/personal-information/personal-information.component';
import { MyTourComponent } from './featuress/page-5/personal-information/my-tour/my-tour.component';

const routes: Routes = [ 
  { path: '', component: SlideshowComponent },
  { path: 'tours', component: AlltoursComponent },
  {
    path: 'tour/:id',
    component: AboutTourComponent,
  },
{path:'registration', component:RegistrationComponent},
{path:'authorization', component:AuthorizationComponent},
{path:'user-page', component:PersonalInformationComponent, children:[
  {path:'my-tour',component:MyTourComponent}
]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes ,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
