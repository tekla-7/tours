import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { tourDataType } from '../../../../core/interfaces/tour.interfaces';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserDataType } from '../../../../core/interfaces/user.interfaces';
import { HttpClient } from '@angular/common/http';
import { InformationService } from '../../../page-1/services/information.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-my-tour',
  templateUrl: './my-tour.component.html',
  styleUrl: './my-tour.component.scss',
})
export class MyTourComponent implements OnInit , OnDestroy{
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

    },error=>{this.error=error.message});
    this.http
      .get<UserDataType>('http://localhost:3000/users/' + this.userId)
      .subscribe((element) => {
        for (const item of element.mytour) {
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
