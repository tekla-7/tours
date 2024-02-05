import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tourDataType } from '../../../core/interfaces/tour.interfaces';
import { Subject, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class InformationService {
  error=new Subject<string>();
  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<any>('http://localhost:3000/post').
    pipe(
      map(elements=>{
        let arr: tourDataType[] = [];
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
          arr.push(obj)

      }
      return arr;}),
    )
    }
  popularNow() {
   return this.http
      .get<any>('http://localhost:3000/post?_sort=Views&_order=desc').  pipe(
        map(elements=>{
          let arr: tourDataType[] = [];
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
            arr.push(obj)
  
        }
        return arr;}),
      )
     
    }
 
  Topoffers() {
    
   return this.http.get<any>('http://localhost:3000/post').pipe(
      map(element=>{
        let arr: tourDataType[] = []; 
         element.sort((a: any, b: any) => {
        const nameA = a.Oldprice - a.Newprice;
        const nameB = b.Oldprice - b.Newprice;
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      });
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
        arr.push(obj);
      }
      return arr;
      })
    )
     
  }
  getone(id: number) {
    let obj: tourDataType = {};
    this.http
      .get<any>('http://localhost:3000/post/' + id)
      .subscribe((element) => {
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
      },error=>{
        this.error.next(error.message);
      });

    return obj;
  }
  
}
