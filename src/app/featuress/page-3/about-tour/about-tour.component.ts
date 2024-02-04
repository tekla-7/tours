import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../page-1/slideshow/information.service';
import { tourDataType } from '../../../core/tour.interfaces';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserDataType } from '../../../core/user.interfaces';
import { Subject, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-about-tour',
  templateUrl: './about-tour.component.html',
  styleUrl: './about-tour.component.scss',
})
export class AboutTourComponent implements OnInit {
  tourlist: tourDataType = {};
  info: string[] = [];
  Thetourincludes: boolean[] = [];
  id: number = 0;
  login = false;
  userId: number = 0;
  savedlist: number[] = [];
  index: number = -1;
  error: string = '';
  private _destorySubj$ = new Subject();

  ngOnInit(): void {
    this.id = this.activrout.snapshot.params['id'];
    this.activrout.queryParams.subscribe((queryParams: Params) => {
      this.userId = queryParams['userId'];
    });
    if (this.userId > 0) {
      this.http
        .get<UserDataType>('http://localhost:3000/users/' + this.userId)
        .pipe(
          map((element) => {
            for (let el of element.saved) {
              this.savedlist.push(el);
            }
            this.index = this.savedlist.findIndex(
              (element) => element == this.id
            );
          }),
          takeUntil(this._destorySubj$))
        .subscribe((element) => {console.log('successful')},
        error=>{this.error=error.message}
        );
    }
  }
  constructor(
    private information: InformationService,
    private http: HttpClient,
    private activrout: ActivatedRoute,
    private router: Router
  ) {
    let arrlist: tourDataType;
    this.http
      .get<any>('http://localhost:3000/post')
      .pipe(
        map((element) => {
          let obj: tourDataType = {};
          obj.id = element[this.id - 1].id;
          obj.title = element[this.id - 1].title;
          obj.img = element[this.id - 1].img;
          obj.Oldprice = element[this.id - 1].Oldprice;
          obj.Newprice = element[this.id - 1].Newprice;
          obj.AdditionalInformation =
            element[this.id - 1].AdditionalInformation;
          obj.Dateofaddition = element[this.id - 1].Dateofaddition;
          obj.Location = element[this.id - 1].Location;
          obj.Difficulty = element[this.id - 1].Difficulty;
          obj.totaldistance = element[this.id - 1].totaldistance;
          obj.Views = element[this.id - 1].Views;
          obj.Rate = element[this.id - 1].Rate;
          this.Thetourincludes.push(
            element[this.id - 1].Thetourincludes.includes('ტრანსპორტირება')
          );
          this.Thetourincludes.push(
            element[this.id - 1].Thetourincludes.includes('კვება')
          );
          this.Thetourincludes.push(
            element[this.id - 1].Thetourincludes.includes(
              'სასტუმროში განთავსება'
            )
          );
          this.Thetourincludes.push(
            element[this.id - 1].Thetourincludes.includes(
              'სალაშქრო აღჭურვილობა'
            )
          );
          this.Thetourincludes.push(
            element[this.id - 1].Thetourincludes.includes('გიდის მომსახურება')
          );
          this.Thetourincludes.push(
            element[this.id - 1].Thetourincludes.includes(
              'ფოტოგრაფის მომსახურება'
            )
          );
          arrlist = obj;
          this.tourlist = obj;
          console.log(this.index);
          arrlist.AdditionalInformation?.map((el) => {
            this.info.push(el);
            return true;
          });
        }),
        takeUntil(this._destorySubj$)
      )
      .subscribe(
        (element) => {
          console.log('successful');
        },
        (error) => {
          this.error = error.message;
        }
      );
  }

  reservation() {
    if (this.userId > 0) {
      this.router.navigate(['/checkout', this.id], {
        queryParamsHandling: 'preserve',
      });
    } else {
      this.router.navigate(['/registration/', this.id], {
        queryParamsHandling: 'preserve',
      });
    }
  }
  saved() {
    if (this.index < 0) {
      this.savedlist.push(this.id);
      this.index = this.savedlist.length - 1;
    } else {
      this.savedlist.splice(this.index, 1);
      this.index = -1;
    }

    if (this.userId > 0) {
      this.http
        .patch<UserDataType>('http://localhost:3000/users/' + this.userId, {
          saved: this.savedlist,
        })
        .subscribe();
    } else {
      this.router.navigate(['/registration/', this.id], {
        queryParamsHandling: 'preserve',
        fragment: 'saved',
      });
    }
  }

  ngOnDestroy(): void {
    this._destorySubj$.next(true);
    this._destorySubj$.complete();
    this._destorySubj$.unsubscribe();
  }
}
