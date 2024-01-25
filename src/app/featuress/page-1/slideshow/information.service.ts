import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tureDataType } from '../../../core/tour.interfaces';
@Injectable({
  providedIn: 'root',
})
export class InformationService {
  constructor(private http: HttpClient) {}
  get() {
    let arrlist: tureDataType[] = [];
    this.http.get<any>('http://localhost:3000/post').subscribe((elements) => {
      for (let element of elements) {
        let obj: tureDataType = {};
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
  
}
