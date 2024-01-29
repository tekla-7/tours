import { Component, EventEmitter, Input, Output } from '@angular/core';
import { tourDataType } from '../../../../core/tour.interfaces';
@Component({
  selector: 'app-offersoftheday',
  templateUrl: './offersoftheday.component.html',
  styleUrl: './offersoftheday.component.scss'
})
export class OffersofthedayComponent {
  @Input() tour:tourDataType={};
  @Output() clickItem = new EventEmitter();
  onClickItem(): void {
    this.clickItem.emit();}
}
