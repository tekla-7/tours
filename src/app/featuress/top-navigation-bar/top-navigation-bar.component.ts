import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserDataType } from '../../core/interfaces/user.interfaces';
import { AuthService } from '../../core/service/auth.service';
import { InformationService } from '../page-1/services/information.service';
import { tourDataType } from '../../core/interfaces/tour.interfaces';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-top-navigation-bar',
  templateUrl: './top-navigation-bar.component.html',
  styleUrl: './top-navigation-bar.component.scss',
})
export class TopNavigationBarComponent implements OnInit , OnDestroy {
  userId: number = 0;
  mytour: number = 0;
  isloggin:boolean=false;
  tourlist: tourDataType[] = [];
  private _destorySubj$ = new Subject();
  error:string='';
  filterstatus:string='';
  constructor(private activrout: ActivatedRoute, private http: HttpClient , private auth:AuthService , private router:Router ,private information:InformationService) {
    this.activrout.queryParams.subscribe((queryParams: Params) => {
      if (queryParams['userId']>0) {
        this.isloggin=true;
        this.userId=queryParams['userId'];
        this.http
          .get<UserDataType>(
            'http://localhost:3000/users/' + +queryParams['userId']
          )
          .subscribe((element) => {
            this.mytour = element.mytour.length;
          });
      }else{
        this.isloggin=false;
      }
    });
    this.information.get().subscribe(
      (elements) => {
        takeUntil(this._destorySubj$)
        this.tourlist = elements;
      },
      (error) => {
        this.error = error.message;
      }
    );
  }
  ngOnInit(): void {}
  out() {
    this.auth.isloggedin = false;
    this.auth.isLoggedId.next(0);
    this.router.navigate(['/'],{queryParams:{userId:0}});
  }
  filtertour(id:any){
    this.router.navigate(['tour', id], {
      queryParamsHandling: 'preserve',
    });
    this.filterstatus='';
  }
  ngOnDestroy(): void {
    this._destorySubj$.next(true)
    this._destorySubj$.complete()
    this._destorySubj$.unsubscribe()
  }
}
