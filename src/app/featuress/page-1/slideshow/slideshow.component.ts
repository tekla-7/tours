import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { InformationService } from '../services/information.service';
import { tourDataType } from '../../../core/interfaces/tour.interfaces';
import { Subject, Subscription, takeUntil } from 'rxjs';
@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.scss',
})
export class SlideshowComponent implements OnInit ,OnDestroy{
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
  error: string = '';
  private _destorySubj$ = new Subject();

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.next();
    }, 3000);
    this.information.error.subscribe((errorMessage) => {
      this.error = errorMessage;
    });
  }
  constructor(private information: InformationService) {
    this.information.get().subscribe(
      (elements) => {
        takeUntil(this._destorySubj$)
        this.tourlist = elements;
      },
      (error) => {
        this.error = error.message;
      }
    );
    this.information.popularNow().subscribe(
      (element) => {
        takeUntil(this._destorySubj$)
        for (let i = 0; i < 5; i++) {
          this.popularNow.push(element[i]);
        }
      },
      (error) => {
        this.error = error.message;
      }
    );
    this.information.get().subscribe(
      (element) => {
        takeUntil(this._destorySubj$)
        for (let i = 1; i < element.length; i += 2) {
          this.Offeroftheday.push(element[i]);
        }
      },
      (error) => {
        this.error = error.message;
      }
    );
    this.information.Topoffers().subscribe(
      (element) => {
        takeUntil(this._destorySubj$);
        this.Topoffers = element;
      },
      (error) => {
        this.error = error.message;
      }
    );
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
    } else if (index == 2) {
      let obj: tourDataType = this.Offeroftheday[0];
      this.Offeroftheday.splice(0, 1);
      this.Offeroftheday.push(obj);
    } else {
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
    } else if (index == 2) {
      let obj: tourDataType = this.Offeroftheday[this.Offeroftheday.length - 1];
      this.Offeroftheday.splice(this.Offeroftheday.length - 1, 1);
      this.Offeroftheday.splice(0, 0, obj);
    } else {
      let obj: tourDataType = this.Topoffers[this.Topoffers.length - 1];
      this.Topoffers.splice(this.Topoffers.length - 1, 1);
      this.Topoffers.splice(0, 0, obj);
    }
  }
  ngOnDestroy(): void {
    this._destorySubj$.next(true)
    this._destorySubj$.complete()
    this._destorySubj$.unsubscribe()
  }

}
