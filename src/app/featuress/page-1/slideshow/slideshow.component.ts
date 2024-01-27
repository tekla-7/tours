import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InformationService } from './information.service';
import { tourDataType } from '../../../core/tour.interfaces';
@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.scss',
})
export class SlideshowComponent implements OnInit {
  slides = [
    {
      url: '../../../assets/5.jpg',
      title: '1',
    },
    {
      url: '../../../assets/2.jpg',
      title: '2',
    },
    {
      url: '../../../assets/3.jpg',
      title: '3',
    },
    {
      url: '../../../assets/7.jpg',
      title: '4',
    },
    {
      url: '../../../assets/1.jpg',
      title: '5',
    },
    {
      url: '../../../assets/77.jpg',
      title: '6',
    },
  ];
  interval: any;
  currentSlide: number = 0;
  tourlist: tourDataType[] = [];
  popularNow: tourDataType[] = [];
  Offeroftheday: tourDataType[] = [];
  Topoffers: tourDataType[] = [];
  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.next();
    }, 3000);
  }
  constructor(private information: InformationService) {
    this.tourlist = this.information.get();
    this.popularNow = this.information.popularNow();
    this.Offeroftheday = this.information.Offeroftheday();
    this.Topoffers = this.information.Topoffers();
  }
  next() {
    if (this.currentSlide == this.slides.length) {
      this.currentSlide = 0;
    } else {
      this.currentSlide += 1;
    }
  }
  ToSlide(index: number) {
    this.currentSlide = index;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.next();
    }, 3000);
  }
  nextPicture(index: number) {
    if (index == 1) {
      let obj: tourDataType = this.popularNow[0];
      this.popularNow.splice(0, 1);
      this.popularNow.push(obj);
    }else if(index==2){
      let obj: tourDataType = this.Offeroftheday[0];
      this.Offeroftheday.splice(0, 1);
      this.Offeroftheday.push(obj);
    }else{
      let obj: tourDataType = this.Topoffers[0];
      this.Topoffers.splice(0, 1);
      this.Topoffers.push(obj);
    }
  }
  prePicture(index: number) {
    if (index == 1) {
      let obj: tourDataType = this.popularNow[this.popularNow.length - 1];
      this.popularNow.splice(this.popularNow.length - 1, 1);
      this.popularNow.splice(0, 0, obj);
    }else if(index==2){
      let obj:tourDataType = this.Offeroftheday[this.Offeroftheday.length - 1];
      this.Offeroftheday.splice(this.Offeroftheday.length - 1, 1);
      this.Offeroftheday.splice(0, 0, obj);
    }else{
      let obj:tourDataType = this.Topoffers[this.Topoffers.length - 1];
      this.Topoffers.splice(this.Topoffers.length - 1, 1);
      this.Topoffers.splice(0, 0, obj);
    }
  
  }
}
