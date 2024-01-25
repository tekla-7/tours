import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationBarComponent } from './featuress/top-navigation-bar/top-navigation-bar.component';
import { SlideshowComponent } from './featuress/page-1/slideshow/slideshow.component';
import { TrendingComponent } from './featuress/page-1/slideshow/trending/trending.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OffersofthedayComponent } from './featuress/page-1/slideshow/offersoftheday/offersoftheday.component';
import { TopoffersComponent } from './featuress/page-1/slideshow/topoffers/topoffers.component';
import { FooterComponent } from './featuress/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    TopNavigationBarComponent,
   SlideshowComponent,
   TrendingComponent,
   OffersofthedayComponent,
   TopoffersComponent,
   FooterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
