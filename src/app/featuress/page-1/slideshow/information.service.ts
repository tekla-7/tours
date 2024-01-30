import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tourDataType } from '../../../core/tour.interfaces';
import { of, filter, map, pipe } from 'rxjs';
import { reduce } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class InformationService {
  constructor(private http: HttpClient) {}
  get() {
    let arrlist: tourDataType[] = [];
    this.http.get<any>('http://localhost:3000/post').subscribe((elements) => {
      for (let element of elements) {
        let obj: tourDataType = {};
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
        arrlist.push(obj);
      }
    });

    return arrlist;
  }
  
  popularNow() {
    let arrlist: tourDataType[] = [];
    this.http
      .get<any>('http://localhost:3000/post?_sort=Views&_order=desc')
      .subscribe((element) => {
        for (let i = 0; i < 5; i++) {
          let obj: tourDataType = {};
          obj.id = element[i].id;
          obj.title = element[i].title;
          obj.img = element[i].img;
          obj.Oldprice = element[i].Oldprice;
          obj.Newprice = element[i].Newprice;
          obj.AdditionalInformation = element[i].AdditionalInformation;
          obj.Dateofaddition = element[i].Dateofaddition;
          obj.Location = element[i].Location;
          obj.Difficulty = element[i].Difficulty;
          obj.totaldistance = element[i].totaldistance;
          obj.Views = element[i].Views;
          obj.Rate = element[i].Rate;
          obj.Thetourincludes = element[i].Thetourincludes;
          arrlist.push(obj);
        }
      });
      return arrlist;
  }
  Offeroftheday(){
    let arrlist: tourDataType[] = [];
    this.http
      .get<any>('http://localhost:3000/post')
      .subscribe((element) => {
        for (let i = 1; i < element.length; i+=2) {
          let obj: tourDataType = {};
          obj.id = element[i].id;
          obj.title = element[i].title;
          obj.img = element[i].img;
          obj.Oldprice = element[i].Oldprice;
          obj.Newprice = element[i].Newprice;
          obj.AdditionalInformation = element[i].AdditionalInformation;
          obj.Dateofaddition = element[i].Dateofaddition;
          obj.Location = element[i].Location;
          obj.Difficulty = element[i].Difficulty;
          obj.totaldistance = element[i].totaldistance;
          obj.Views = element[i].Views;
          obj.Rate = element[i].Rate;
          obj.Thetourincludes = element[i].Thetourincludes;
          arrlist.push(obj);
        }
      });
      return arrlist;
  }
  Topoffers(){
    let arrlist: tourDataType[] = [];
    this.http
      .get<any>('http://localhost:3000/post')
      .subscribe((element) => {
        element.sort((a:any, b:any) => {
          const nameA = a.Oldprice-a.Newprice; 
          const nameB = b.Oldprice-b.Newprice;
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          return 0;
          
        })
        for (let i = 0; i < 5; i++) {
          let obj: tourDataType = {};
          obj.id = element[i].id;
          obj.title = element[i].title;
          obj.img = element[i].img;
          obj.Oldprice = element[i].Oldprice;
          obj.Newprice = element[i].Newprice;
          obj.AdditionalInformation = element[i].AdditionalInformation;
          obj.Dateofaddition = element[i].Dateofaddition;
          obj.Location = element[i].Location;
          obj.Difficulty = element[i].Difficulty;
          obj.totaldistance = element[i].totaldistance;
          obj.Views = element[i].Views;
          obj.Rate = element[i].Rate;
          obj.Thetourincludes = element[i].Thetourincludes;
          arrlist.push(obj);
        }
      });
      return arrlist;
  }
getone(id:number){
  let obj: tourDataType={};
  this.http.get<any>('http://localhost:3000/post').subscribe((element) => {
      obj.id = element[id].id;
      obj.title = element[id].title;
      obj.img = element[id].img;
      obj.Oldprice = element[id].Oldprice;
      obj.Newprice = element[id].Newprice;
      obj.AdditionalInformation = element[id].AdditionalInformation;
      obj.Dateofaddition = element[id].Dateofaddition;
      obj.Location = element[id].Location;
      obj.Difficulty = element[id].Difficulty;
      obj.totaldistance = element[id].totaldistance;
      obj.Views = element[id].Views;
      obj.Rate = element[id].Rate;
      obj.Thetourincludes = element[id].Thetourincludes;
      
    
  });

  return obj;
}

}
