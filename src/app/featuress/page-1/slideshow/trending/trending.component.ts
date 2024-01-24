import { Component, Input } from '@angular/core';
import {tureDataType} from '../../../../core/tour.interfaces'
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.scss'
})
export class TrendingComponent {
@Input() ture:tureDataType={};

}
