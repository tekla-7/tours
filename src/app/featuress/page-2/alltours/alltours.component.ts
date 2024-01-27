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
    // this.pro=new FormGroup({
    //   checkbox: new FormControl(null),
    // })
    // this.check=this.pro.get('checkbox')?.value;
    }
  call(index:number){
    
    if(index==1){
       if(this.isActive1){
      this.isActive1=false
    }else{
      this.isActive1=true;
    }
      console.log(this.isChecked)
    }else if(index==2){
      if(this.isActive2){
        this.isActive2=false
      }else{
        this.isActive2=true;
      }
    }else if(index==3){
      if(this.isActive3){
        this.isActive3=false
      }else{
        this.isActive3=true;
      }
    }else if(index==4){
      if(this.isActive4){
        this.isActive4=false
      }else{
        this.isActive4=true;
      }
    }else if(index==5){
      if(this.isActive5){
        this.isActive5=false
      }else{
        this.isActive5=true;
      }
    }else{
      if(this.isActive6){
        this.isActive6=false
      }else{
        this.isActive6=true;
      }
    }
   
  
  }
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
