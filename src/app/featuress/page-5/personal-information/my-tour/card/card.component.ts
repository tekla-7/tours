import { Component, Input } from '@angular/core';
import { tourDataType } from '../../../../../core/interfaces/tour.interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() mytour:tourDataType={};
}
