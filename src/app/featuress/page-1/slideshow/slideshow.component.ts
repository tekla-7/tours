import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InformationService } from './information.service';
import { tureDataType } from '../../../core/tour.interfaces';
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
  turelist: tureDataType[] = [];
topture:tureDataType[]=[];
  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.next();
    }, 3000);
  }
  constructor(private information: InformationService) {
    this.turelist = this.information.get();
    console.log(this.turelist);
    
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
  nextPicture() {
    let obj: tureDataType = this.turelist[0];
    this.turelist.splice(0, 1);
    this.turelist.push(obj);
 
  }
  prePicture() {
    let obj: tureDataType = this.turelist[this.turelist.length - 1];
    this.turelist.splice(this.turelist.length - 1, 1);
    this.turelist.splice(0, 0, obj);
  }
}
