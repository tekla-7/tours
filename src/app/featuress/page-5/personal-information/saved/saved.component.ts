import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserDataType } from '../../../../core/interfaces/user.interfaces';
import { tourDataType } from '../../../../core/interfaces/tour.interfaces';
import { InformationService } from '../../../page-1/services/information.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrl: './saved.component.scss',
})
export class SavedComponent implements OnInit ,OnDestroy{
  userId: number = 0;
  mylist: number[] = [];
  tourlist: tourDataType[] = [];
  error:string='';
  private _destorySubj$ = new Subject()

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
    },error=>{this.error=error.message}
    );
    this.http
      .get<UserDataType>('http://localhost:3000/users/' + this.userId)
      .subscribe((element) => {
        for (const item of element.saved) {
          this.tourlist.push(this.information.getone(item));
          this.mylist.push(item);
        }  
        takeUntil(this._destorySubj$)

      },
      error=>{this.error=error.message});
      
  
}
ngOnDestroy(): void {
  this._destorySubj$.next(true)
  this._destorySubj$.complete()
  this._destorySubj$.unsubscribe()
}

}
