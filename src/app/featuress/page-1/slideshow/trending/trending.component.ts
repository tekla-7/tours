import { Component, Input } from '@angular/core';
import {tourDataType} from '../../../../core/interfaces/tour.interfaces'
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.scss'
})
export class TrendingComponent {
@Input() tour:tourDataType={};

}
