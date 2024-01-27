import { Component, Input } from '@angular/core';
import { tourDataType } from '../../../../core/tour.interfaces';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrl: './tour-card.component.scss'
})
export class TourCardComponent {
@Input() tour:tourDataType={};
constructor(){

}

}
