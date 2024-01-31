import { NgLocaleLocalization } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { tourDataType } from '../../../core/tour.interfaces';
import { InformationService } from '../../page-1/slideshow/information.service';

@Component({
  selector: 'app-alltours',
  templateUrl: './alltours.component.html',
  styleUrl: './alltours.component.scss',
  
})
export class AlltoursComponent {
 public isChecked=false;
  isActive1 =false;
  isActive2=false;
  isActive3=false;
  isActive4=false;
  isActive5=false;
  isActive6=false;
  disabled = false;
  min=0;
  thumbLabel = true;
  value = 0;
  tourlist:tourDataType[];
  constructor(private information: InformationService) {
    this.tourlist = this.information.get();
    
    }
  call(index:number){
    
    if(index==1){
      this.isActive1=!this.isActive1
      
    }else if(index==2){
      this.isActive2=!this.isActive2
    }else if(index==3){
      this.isActive3=!this.isActive3
    }else if(index==4){
      this.isActive4=!this.isActive4
    }else if(index==5){
      this.isActive5=!this.isActive5
    }else{
      this.isActive6=!this.isActive6
    }
   
  
  }
 
}
