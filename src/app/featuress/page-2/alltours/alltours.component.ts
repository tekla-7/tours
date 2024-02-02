import { NgLocaleLocalization } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { tourDataType } from '../../../core/tour.interfaces';
import { InformationService } from '../../page-1/slideshow/information.service';

@Component({
  selector: 'app-alltours',
  templateUrl: './alltours.component.html',
  styleUrl: './alltours.component.scss',
})
export class AlltoursComponent implements OnInit{
  isChecked = false;
  isActive1 = false;
  isActive2 = false;
  isActive3 = false;
  isActive4 = false;
  isActive5 = false;
  isActive6 = false;
  disabled = false;
  min = 0;
  thumbLabel = true;
  value = 0;
  tourlist: {id: Number;
    title: String;
    img: String;
    Oldprice: number;
    Newprice: number;
    AdditionalInformation:string[];
    Dateofaddition: String;
    Location: String;
    Difficulty: String;
    totaldistance: String;
    Views: number;
    Rate: String;
    Thetourincludes: String;
    category:string;}[]=[];
  filterForm: FormGroup;
  search:boolean[] = []
  ;
  ngOnInit(): void {
    this.tourlist = this.information.get();
  }
  constructor(private information: InformationService) {
    this.tourlist = this.information.get();
    this.filterForm = new FormGroup({
      '1': new FormControl(false),
      '2': new FormControl(false),
      '3': new FormControl(false),
      '4': new FormControl(false),
      '5': new FormControl(false),
      '6': new FormControl(false),
      '7': new FormControl(false),
      '8': new FormControl(false),
      '9': new FormControl(false),
      '10': new FormControl(false),
      '11': new FormControl(false),
      '12': new FormControl(false),
      '13': new FormControl(false),
      '14': new FormControl(false),
      '15': new FormControl(false),
      '16': new FormControl(false),
      '17': new FormControl(false),
      '18': new FormControl(false),
      '19': new FormControl(false),
      '20': new FormControl(false),
      '21': new FormControl(false),
      '22': new FormControl(false),
      '23': new FormControl(false),
      '24': new FormControl(false),
      '25': new FormControl(false),
      '26': new FormControl(false),
      '27': new FormControl(false),
      '28': new FormControl(false),
      '29': new FormControl(false),
      '30': new FormControl(false),
      '31': new FormControl(false),
    });
  }
  call(index: number) {
    if (index == 1) {
      this.isActive1 = !this.isActive1;
    } else if (index == 2) {
      this.isActive2 = !this.isActive2;
    } else if (index == 3) {
      this.isActive3 = !this.isActive3;
    } else if (index == 4) {
      this.isActive4 = !this.isActive4;
    } else if (index == 5) {
      this.isActive5 = !this.isActive5;
    } else {
      this.isActive6 = !this.isActive6;
    }
  }
  Search() {
    let arr=[];
    arr.push(
      this.filterForm.get('1')?.value,
      this.filterForm.get('2')?.value,
      this.filterForm.get('3')?.value,
      this.filterForm.get('4')?.value,
      this.filterForm.get('5')?.value,
      this.filterForm.get('6')?.value,
      this.filterForm.get('7')?.value,
      this.filterForm.get('8')?.value,
      this.filterForm.get('9')?.value,
      this.filterForm.get('10')?.value,
      this.filterForm.get('11')?.value,
      this.filterForm.get('12')?.value,
      this.filterForm.get('13')?.value,
      this.filterForm.get('14')?.value,
      this.filterForm.get('15')?.value,
      this.filterForm.get('16')?.value,
      this.filterForm.get('17')?.value,
      this.filterForm.get('18')?.value,
      this.filterForm.get('19')?.value,
      this.filterForm.get('20')?.value,
      this.filterForm.get('21')?.value,
      this.filterForm.get('22')?.value,
      this.filterForm.get('23')?.value,
      this.filterForm.get('24')?.value,
      this.filterForm.get('25')?.value,
      this.filterForm.get('26')?.value,
      this.filterForm.get('27')?.value,
      this.filterForm.get('28')?.value,
      this.filterForm.get('29')?.value,
      this.filterForm.get('30')?.value,
      this.filterForm.get('31')?.value,
    );
    this.search=arr;



if(this.tourlist){

  console.log(this.tourlist[0].Newprice>0)



}





    
   }
}
