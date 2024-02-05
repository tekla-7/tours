import { Component, Input } from '@angular/core';
import { tourDataType } from '../../../../core/interfaces/tour.interfaces';
@Component({
  selector: 'app-topoffers',
  templateUrl: './topoffers.component.html',
  styleUrl: './topoffers.component.scss'
})
export class TopoffersComponent {
  @Input() tour:tourDataType={};
}
