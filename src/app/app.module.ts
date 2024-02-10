import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationBarComponent } from './featuress/top-navigation-bar/top-navigation-bar.component';
import { FooterComponent } from './featuress/footer/footer.component';
import { RegistrationComponent } from './featuress/page-4/component/registration/registration.component';
import { AuthorizationComponent } from './featuress/page-4/component/authorization/authorization.component';
import { CheckoutComponent } from './featuress/page-4/component/checkout/checkout.component';
import { SuccessfulOperationComponent } from './featuress/page-4/component/successful-operation/successful-operation.component';
import { ContactInformationComponent } from './featuress/page-6/contact-information/contact-information.component';
import { RefundPolicyComponent } from './featuress/page 7/component/refund-policy/refund-policy.component';
import { PrivacyComponent } from './featuress/page 7/component/privacy/privacy.component';
import { AboutUsComponent } from './featuress/page 7/component/about-us/about-us.component';
import { FilterPipe } from './core/guard-pipe/filter.pipe';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';





@NgModule({
  declarations: [
    AppComponent,
    TopNavigationBarComponent,
FooterComponent,
   RegistrationComponent,
   AuthorizationComponent,
   CheckoutComponent,
   SuccessfulOperationComponent,
   ContactInformationComponent,
   RefundPolicyComponent,
   PrivacyComponent,
   AboutUsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    RouterTestingModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
