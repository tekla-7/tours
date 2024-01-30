import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideshowComponent } from './featuress/page-1/slideshow/slideshow.component';
import { AlltoursComponent } from './featuress/page-2/alltours/alltours.component';
import { AboutTourComponent } from './featuress/page-3/about-tour/about-tour.component';
import { RegistrationComponent } from './featuress/page-4/registration/registration.component';
import { AuthorizationComponent } from './featuress/page-4/authorization/authorization.component';
import { PersonalInformationComponent } from './featuress/page-5/personal-information/personal-information.component';
import { MyTourComponent } from './featuress/page-5/personal-information/my-tour/my-tour.component';
import { MyDataComponent } from './featuress/page-5/personal-information/my-data/my-data.component';
import { SavedComponent } from './featuress/page-5/personal-information/saved/saved.component';
import { HistoryComponent } from './featuress/page-5/personal-information/history/history.component';
import { UpdatePasswordComponent } from './featuress/page-5/personal-information/update-password/update-password.component';
import { CheckoutComponent } from './featuress/page-4/checkout/checkout.component';
import { combineLatest } from 'rxjs';
import { SuccessfulOperationComponent } from './featuress/page-4/successful-operation/successful-operation.component';

const routes: Routes = [ 
  { path: '', component: SlideshowComponent },
  { path: 'tours', component: AlltoursComponent },
  {
    path: 'tour/:id',
    component: AboutTourComponent,
  },
{path:'registration/:id', component:RegistrationComponent},
{path:'authorization/:id', component:AuthorizationComponent},
{path:'checkout/:id',component:CheckoutComponent},
{path:'successful-operation',component:SuccessfulOperationComponent},
{path:'user-page', component:PersonalInformationComponent, children:[
  {path:'my-tour',component:MyTourComponent},
  {path:'my-data',component:MyDataComponent},
  {path:'saved',component:SavedComponent},
  {path:'history',component:HistoryComponent},
  {path:'update-password',component:UpdatePasswordComponent},
]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes ,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
