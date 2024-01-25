import { Component, Input } from '@angular/core';
import { tureDataType } from '../../../../core/tour.interfaces';
@Component({
  selector: 'app-offersoftheday',
  templateUrl: './offersoftheday.component.html',
  styleUrl: './offersoftheday.component.scss'
})
export class OffersofthedayComponent {
  @Input() ture:tureDataType={};
}
