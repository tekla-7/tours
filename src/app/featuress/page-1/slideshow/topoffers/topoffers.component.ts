import { Component, Input } from '@angular/core';
import { tureDataType } from '../../../../core/tour.interfaces';
@Component({
  selector: 'app-topoffers',
  templateUrl: './topoffers.component.html',
  styleUrl: './topoffers.component.scss'
})
export class TopoffersComponent {
  @Input() ture:tureDataType={};
}
