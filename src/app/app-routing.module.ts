import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './featuress/page-4/component/registration/registration.component';
import { AuthorizationComponent } from './featuress/page-4/component/authorization/authorization.component';
import { CheckoutComponent } from './featuress/page-4/component/checkout/checkout.component';
import { SuccessfulOperationComponent } from './featuress/page-4/component/successful-operation/successful-operation.component';
import { ContactInformationComponent } from './featuress/page-6/contact-information/contact-information.component';
import { RefundPolicyComponent } from './featuress/page 7/component/refund-policy/refund-policy.component';
import { PrivacyComponent } from './featuress/page 7/component/privacy/privacy.component';
import { AboutUsComponent } from './featuress/page 7/component/about-us/about-us.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import('./featuress/page-1/module/page-1.module').then(
        (m) => m.Page1Module
      )
  },
  {
    path: "tours",
    loadChildren: () =>
      import('./featuress/page-2/module/page-2.module').then(
        (m) => m.Page2Module
      ),
  },
  {
    path: 'tour/:id',
    loadChildren: () =>
      import('./featuress/page-3/module/page-3.module').then(
        (m) => m.Page3Module
      ),
  },
  { path: 'registration/:id', component: RegistrationComponent },
  { path: 'authorization/:id', component: AuthorizationComponent },
  { path: 'checkout/:id', component: CheckoutComponent },
  { path: 'successful-operation', component: SuccessfulOperationComponent },
  {
    path: 'user-page',
    loadChildren: () =>
      import('./featuress/page-5/module/user.module').then((m) => m.UserModule),
  },
  { path: 'contact-information', component: ContactInformationComponent },
  { path: 'refund-policy', component: RefundPolicyComponent },
  { path: 'policy', component: PrivacyComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
