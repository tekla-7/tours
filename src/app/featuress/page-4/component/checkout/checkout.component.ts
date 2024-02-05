import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { tourDataType } from '../../../../core/interfaces/tour.interfaces';
import { InformationService } from '../../../page-1/services/information.service';
import { AuthService } from '../../../../core/service/auth.service';
import { Subject, map, takeUntil } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataType } from '../../../../core/interfaces/user.interfaces';
import { Card } from '../../../../core/interfaces/card.interfaces';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent implements OnInit {
  id: number = 0;
  userId: number = 0;
  tourlist: tourDataType = {};
  cardForm: FormGroup;
  cardinfo: Card = {};
  cardlist: Card[] = [];
  mytourList: number[] = [];
  error: string = '';
  private _destorySubj$ = new Subject();
  ngOnInit(): void {
    this.activrout.params.subscribe(
      (parms: Params) => {
        this.id = parms['id'];
        takeUntil(this._destorySubj$);
      },
      (error) => {
        this.error = error.message;
      }
    );
    this.tourlist = this.information.getone(this.id);
    this.activrout.queryParams.subscribe(
      (queryParams: Params) => {
        this.userId = queryParams['userId'];
        takeUntil(this._destorySubj$);
      },
      (error) => {
        this.error = error.message;
      }
    );
    this.http
      .get<UserDataType>('http://localhost:3000/users/' + this.userId)
      .pipe(
        map((element) => {
          for (const item of element.card) {
            this.cardlist.push(item);
          }
          for (const item of element.mytour) {
            this.mytourList.push(item);
          }
          return 'successful';
        })
      )
      .subscribe(
        (element) => {
          console.log(element);
          takeUntil(this._destorySubj$);
        },
        (error) => {
          this.error = error.message;
        }
      );
  }
  constructor(
    private activrout: ActivatedRoute,
    private information: InformationService,
    private auth: AuthService,
    private http: HttpClient,
    private router: Router
  ) {
    this.cardForm = new FormGroup({
      cardname: new FormControl(null, [Validators.required]),
      cardnumber: new FormControl(null, [
        Validators.required,
        Validators.max(16),
      ]),
      cardexpirationdate: new FormControl(null),
      cardcvv: new FormControl(null),
      saved: new FormControl(true),
    });
  }
  checkout() {
    this.cardinfo.cardname = this.cardForm.get('cardname')?.value;
    this.cardinfo.cardnumber = this.cardForm.get('cardnumber')?.value;
    this.cardinfo.cardexpirationdate =
      this.cardForm.get('cardexpirationdate')?.value;
    this.cardinfo.cardcvv = this.cardForm.get('cardcvv')?.value;
    this.cardlist.push(this.cardinfo);
    this.mytourList.push(+this.id);
    if (this.cardForm.get('saved')?.value) {
      this.http
        .patch('http://localhost:3000/users/' + this.userId, {
          card: this.cardlist,
          mytour: this.mytourList,
        })
        .subscribe(
          (element) => {
            takeUntil(this._destorySubj$);
          },
          (error) => {
            this.error = error.message;
          }
        );
    }
    this.router.navigate(['successful-operation'], {
      queryParamsHandling: 'preserve',
    });
  }
  usemycard(i:number){
    this.cardForm.get('cardname')?.setValue(this.cardlist[i].cardname);
    this.cardForm.get('cardnumber')?.setValue(this.cardlist[i].cardnumber);
    this.cardForm.get('cardexpirationdate')?.setValue(this.cardlist[i].cardexpirationdate);
    this.cardForm.get('cardcvv')?.setValue(this.cardlist[i].cardcvv);
    this.cardForm.get('saved')?.setValue(false);
  }
  ngOnDestroy(): void {
    this._destorySubj$.next(true);
    this._destorySubj$.complete();
    this._destorySubj$.unsubscribe();
  }
}
