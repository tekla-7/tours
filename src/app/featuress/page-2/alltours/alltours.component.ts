import { NgLocaleLocalization } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { tourDataType } from '../../../core/interfaces/tour.interfaces';
import { InformationService } from '../../page-1/services/information.service';
import { HttpClient } from '@angular/common/http';
import { Filter } from '../../../core/interfaces/filter.ts';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-alltours',
  templateUrl: './alltours.component.html',
  styleUrl: './alltours.component.scss',
})
export class AlltoursComponent implements OnInit ,OnDestroy{
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
  tourlist: Filter[] = [];
  tourlistfilter: Filter[] = [];
  filterForm: FormGroup;
  search: boolean[] = [];
  error:string='';
  private _destorySubj$ = new Subject();

  ngOnInit(): void {
    
  }
  constructor(
    private information: InformationService,
    private http: HttpClient,
    private activrout:ActivatedRoute
  ) {
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
    this.http.get<any>('http://localhost:3000/post').subscribe((elements) => {
      takeUntil(this._destorySubj$);
      for (let element of elements) {
        let obj: Filter = {
          id: 0,
          day:0,
          title: '',
          Newprice: 0,
          Dateofaddition: '',
          Location: '',
          Difficulty: '',
          category: '',
        };
        obj.day=element.day;
        obj.category=element.category;
        obj.id = element.id;
        obj.title = element.title;
        obj.img = element.img;
        obj.Oldprice = element.Oldprice;
        obj.Newprice = element.Newprice;
        obj.AdditionalInformation = element.AdditionalInformation;
        obj.Dateofaddition = element.Dateofaddition;
        obj.Location = element.Location;
        obj.Difficulty = element.Difficulty;
        obj.totaldistance = element.totaldistance;
        obj.Views = element.Views;
        obj.Rate = element.Rate;
        obj.Thetourincludes = element.Thetourincludes;
        this.tourlistfilter.push(obj);
        this.tourlist.push(obj);
      }
    },error=>{
      this.error=error.message;
    }
    );
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
    let arr = [];
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
      this.filterForm.get('31')?.value
    );
    this.search = arr;
   this.tourlist= this.tourlistfilter
      .filter((tour) => {
        return (
          (tour.Newprice <= 100 && this.search[0]) ||
          (tour.Newprice > 100 && tour.Newprice <= 200 && this.search[1]) ||
          (tour.Newprice > 200 && tour.Newprice <= 300 && this.search[2]) ||
          (tour.Newprice > 300 && this.search[3]) ||
          (!this.search[0] &&
            !this.search[1] &&
            !this.search[2] &&
            !this.search[3])
        );
      })
      .filter((tour) => {
        return (
          (tour.Location == 'იმერეთი' && this.search[4]) ||
          (tour.Location == 'კახეთი' && this.search[5]) ||
          (tour.Location == 'აჭარა' && this.search[6])||
          (tour.Location == 'სვანეთი' && this.search[7])||
          (tour.Location == 'მცხეთა-მთიანეთი' && this.search[8])||
          (tour.Location == 'შიდა ქართლი' && this.search[9])||
          (tour.Location == 'სამცხე-ჯავახეთი' && this.search[10])||
          (tour.Location == 'გურია' && this.search[11])||
          (tour.Location == 'რაჭა' && this.search[12])||
          (tour.Location == 'თბილისი' && this.search[13])||
          (tour.Location == 'სამეგრელო' && this.search[14])||
          (tour.Location == 'ლეჩხუმი' && this.search[15])||
          (!this.search[4] &&
            !this.search[5] &&
            !this.search[6] &&
            !this.search[7]&&
            !this.search[8]&&
            !this.search[9]&&
            !this.search[10]&&
            !this.search[11]&&
            !this.search[12]&&
            !this.search[13]&&
            !this.search[14]&&
            !this.search[15])
        );
      })
      .filter((tour) => {
        return (
          (tour.category == 'ტბა' && this.search[16]) ||
          (tour.category == 'ჩანჩქერი' && this.search[17]) ||
          (tour.category == 'კანიონი' && this.search[18])||
          (tour.category== 'მთა' && this.search[19])||
          (tour.category == 'უღელტეხილი' && this.search[20])||
          (tour.category == 'მღვიმე' && this.search[21])||
          (tour.category == 'ხეობა' && this.search[22])||
          (tour.category == 'ეროვნული პარკი' && this.search[23])||
          (!this.search[16] &&
            !this.search[17] &&
            !this.search[18] &&
            !this.search[19]&&
            !this.search[20]&&
            !this.search[21]&&
            !this.search[22]&&
            !this.search[23])
        );
      })
      .filter((tour) => {
        return (
          (tour.day<=1 && this.search[24]) ||
          (tour.day>1 &&tour.day<=2  && this.search[25]) ||
          (tour.day>2 &&tour.day<=3  && this.search[26])||
          (tour.day>3 && this.search[27])||
          (!this.search[24] &&
            !this.search[25] &&
            !this.search[26] &&
            !this.search[27])
        )
      })
      .filter((tour) => {
        return (
          (tour.Difficulty=='მარტივი' && this.search[28]) ||
          (tour.Difficulty=='საშუალო'  && this.search[29]) ||
          (tour.Difficulty=='რთული' && this.search[30])||
          (!this.search[28] &&
            !this.search[29] &&
            !this.search[30]
          )
        )
      })
  }
  clear(){
    const cleararr = new Array(31).fill(false);
    this.search=cleararr;
    this.filterForm.reset();
    this.tourlist=this.tourlistfilter;
  }
  ngOnDestroy(): void {
    this._destorySubj$.next(true)
    this._destorySubj$.complete()
    this._destorySubj$.unsubscribe()
  }

}
