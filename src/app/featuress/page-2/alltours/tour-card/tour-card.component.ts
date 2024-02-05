import { Component, EventEmitter, Input, Output } from '@angular/core';
import { tourDataType } from '../../../../core/interfaces/tour.interfaces';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrl: './tour-card.component.scss'
})
export class TourCardComponent {
@Input() tour:tourDataType={};
@Output() addsavedtour=new EventEmitter<string>();
constructor(){

}
addsaved(){
  this.addsavedtour.emit();
}
}
