import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FilterPipe } from './guard-pipe/filter.pipe';




@NgModule({
  declarations: [
    PageNotFoundComponent,
    FilterPipe

  ],
  imports: [
    CommonModule
  ],
  exports:[
    PageNotFoundComponent
  ]
})
export class CoreModule { }
