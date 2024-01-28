import { Component } from '@angular/core';
import { InformationService } from '../../page-1/slideshow/information.service';
import { tourDataType } from '../../../core/tour.interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about-tour',
  templateUrl: './about-tour.component.html',
  styleUrl: './about-tour.component.scss'
})
export class AboutTourComponent {
  tourlist:tourDataType[];
  info:string[]=[];
  Thetourincludes:boolean[]=[];
  constructor(private information: InformationService , private http:HttpClient) {
    this.tourlist=this.information.get();
    let arrlist: tourDataType;
    this.http.get<any>('http://localhost:3000/post').subscribe((element) => {
        let obj: tourDataType = {};
        obj.id = element[0].id;
        obj.title = element[0].title;
        obj.img = element[0].img;
        obj.Oldprice = element[0].Oldprice;
        obj.Newprice = element[0].Newprice;
        obj.AdditionalInformation = element[0].AdditionalInformation;
        obj.Dateofaddition = element[0].Dateofaddition;
        obj.Location = element[0].Location;
        obj.Difficulty = element[0].Difficulty;
        obj.totaldistance = element[0].totaldistance;
        obj.Views = element[0].Views;
        obj.Rate = element[0].Rate;
        this.Thetourincludes.push( element[0].Thetourincludes.includes('ტრანსპორტირება'));
        this.Thetourincludes.push( element[0].Thetourincludes.includes('კვება'));
        this.Thetourincludes.push( element[0].Thetourincludes.includes('სასტუმროში განთავსება'));
        this.Thetourincludes.push( element[0].Thetourincludes.includes('სალაშქრო აღჭურვილობა'));
        this.Thetourincludes.push( element[0].Thetourincludes.includes('გიდის მომსახურება'));
        this.Thetourincludes.push( element[0].Thetourincludes.includes('ფოტოგრაფის მომსახურება'));

        arrlist=(obj);
        arrlist.AdditionalInformation?.map(el=>{
        this.info.push(el);})


    });
   console.log(this.Thetourincludes)
  }
  



}
