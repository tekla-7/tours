import { Component } from '@angular/core';
import { InformationService } from '../../page-1/slideshow/information.service';
import { tourDataType } from '../../../core/tour.interfaces';

@Component({
  selector: 'app-about-tour',
  templateUrl: './about-tour.component.html',
  styleUrl: './about-tour.component.scss'
})
export class AboutTourComponent {
  tourlist:tourDataType[];
  constructor(private information: InformationService) {
    this.tourlist = this.information.get();}
}
