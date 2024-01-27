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
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
