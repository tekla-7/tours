import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationBarComponent } from './featuress/top-navigation-bar/top-navigation-bar.component';
import { SlideshowComponent } from './featuress/page-1/slideshow/slideshow.component';
import { TrendingComponent } from './featuress/page-1/slideshow/trending/trending.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OffersofthedayComponent } from './featuress/page-1/slideshow/offersoftheday/offersoftheday.component';
import { TopoffersComponent } from './featuress/page-1/slideshow/topoffers/topoffers.component';
import { FooterComponent } from './featuress/footer/footer.component';
import { AlltoursComponent } from './featuress/page-2/alltours/alltours.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import { MatNativeDateModule } from '@angular/material/core';
import { TourCardComponent } from './featuress/page-2/alltours/tour-card/tour-card.component';
import { AboutTourComponent } from './featuress/page-3/about-tour/about-tour.component';
import { RegistrationComponent } from './featuress/page-4/registration/registration.component';
import { AuthorizationComponent } from './featuress/page-4/authorization/authorization.component';
import { CheckoutComponent } from './featuress/page-4/checkout/checkout.component';
import { SuccessfulOperationComponent } from './featuress/page-4/successful-operation/successful-operation.component';
import { PersonalInformationComponent } from './featuress/page-5/personal-information/personal-information.component';
// import { MyTourComponent } from './featuress/page-5/personal-information/my-tour/my-tour.component';
// import { MyDataComponent } from './featuress/page-5/personal-information/my-data/my-data.component';
// import { CardComponent } from './featuress/page-5/personal-information/my-tour/card/card.component';
// import { SavedComponent } from './featuress/page-5/personal-information/saved/saved.component';
// import { HistoryComponent } from './featuress/page-5/personal-information/history/history.component';
// import { UpdatePasswordComponent } from './featuress/page-5/personal-information/update-password/update-password.component';
import {MatMenuModule} from '@angular/material/menu';
// import { CreditCardComponent } from './featuress/page-5/personal-information/credit-card/credit-card.component';
// import { CreditComponent } from './featuress/page-5/personal-information/credit-card/credit/credit.component';
import { ContactInformationComponent } from './featuress/page-6/contact-information/contact-information.component';
import { RefundPolicyComponent } from './featuress/page 7/refund-policy/refund-policy.component';
import { PrivacyComponent } from './featuress/page 7/privacy/privacy.component';
import { AboutUsComponent } from './featuress/page 7/about-us/about-us.component';
import { PageNotFoundComponent } from './featuress/page-not-found/page-not-found/page-not-found.component';
import { FilterPipe } from './core/filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    TopNavigationBarComponent,
   SlideshowComponent,
   TrendingComponent,
   OffersofthedayComponent,
   TopoffersComponent,
   FooterComponent,
   AlltoursComponent,
   TourCardComponent,
   AboutTourComponent,
   RegistrationComponent,
   AuthorizationComponent,
   CheckoutComponent,
   SuccessfulOperationComponent,
  //  PersonalInformationComponent,
  //  MyTourComponent,
  //  MyDataComponent,
  //  CardComponent,
  //  SavedComponent,
  //  HistoryComponent,
  //  UpdatePasswordComponent,
  //  CreditCardComponent,
  //  CreditComponent,
   ContactInformationComponent,
   RefundPolicyComponent,
   PrivacyComponent,
   AboutUsComponent,
   PageNotFoundComponent,
 FilterPipe
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule ,
    MatSliderModule,
    MatNativeDateModule,
    MatMenuModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
