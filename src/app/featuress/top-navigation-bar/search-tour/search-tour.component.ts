import { Component, Input } from '@angular/core';
import { tourDataType } from '../../../core/interfaces/tour.interfaces';

@Component({
  selector: 'app-search-tour',
  templateUrl: './search-tour.component.html',
  styleUrl: './search-tour.component.scss'
})
export class SearchTourComponent {
  @Input() tour:tourDataType={};
}
