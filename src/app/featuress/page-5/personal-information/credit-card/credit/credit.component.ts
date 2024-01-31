import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrl: './credit.component.scss'
})
export class CreditComponent {
  @Input() card:{
    cardname?: string;
    cardnumber?: number;
    cardexpirationdate?: number;
    cardcvv?: number;
  }={}
  @Output() delateCard = new EventEmitter<string>();
  panelOpenState = false;
  isActive=false;
  call(){
    this.isActive=!this.isActive;
  }
  delate(){
    this.delateCard.emit();
  }
}
