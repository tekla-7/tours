import { Component, OnDestroy, OnInit } from '@angular/core';
import { tourDataType } from '../../../../core/tour.interfaces';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserDataType } from '../../../../core/user.interfaces';
import { HttpClient } from '@angular/common/http';
import { InformationService } from '../../../page-1/slideshow/information.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent implements OnInit , OnDestroy{
  userId: number = 0;
  mylist: number[] = [];
  tourlist: tourDataType[] = [];
  error:string='';
  private _destorySubj$ = new Subject();
  ngOnInit(): void {
    
   }
  constructor(
    private router: Router,
    private activrout: ActivatedRoute,
    private http: HttpClient,
    private information: InformationService
  ) {
    this.activrout.queryParams.subscribe((queryParams: Params) => {
      this.userId = queryParams['userId'];
      takeUntil(this._destorySubj$)

    },error=>{this.error=error.message});
    this.http
      .get<UserDataType>('http://localhost:3000/users/' + this.userId)
      .subscribe((element) => {
        for (const item of element.oldtour) {
          this.tourlist.push(this.information.getone(item));
          this.mylist.push(item);
        } 
        takeUntil(this._destorySubj$) 
      },error=>{this.error=error.message});
      
  
}
ngOnDestroy(): void {
  this._destorySubj$.next(true)
  this._destorySubj$.complete()
  this._destorySubj$.unsubscribe()
}

}
