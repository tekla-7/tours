import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { UserDataType } from '../../../../core/interfaces/user.interfaces';
import { Subject, takeUntil } from 'rxjs';
import { passwordvalidator } from '../../../../core/interfaces/passwordconfirm-validator';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrl: './update-password.component.scss',
})
export class UpdatePasswordComponent implements OnInit , OnDestroy{
  passwordform: FormGroup;
  userId: number = 0;
  oldpassword: string = '';
  newpassword: string = '';
  confirmpassword: string = '';
  userpassword: string = '';
  error:string='';
  private _destorySubj$ = new Subject()

  constructor(private activrout: ActivatedRoute, private http: HttpClient) {
    this.passwordform = new FormGroup({
      oldpassword: new FormControl(null),
      password: new FormControl(null),
      confirmpassword: new FormControl(null),
    },
    {
      validators: passwordvalidator,
    }
    );
    this.activrout.queryParams.subscribe((queryParams: Params) => {
      this.userId = queryParams['userId'];
    });
  }
  ngOnInit(): void {
    this.http
      .get<UserDataType>('http://localhost:3000/users/' + this.userId)
      .subscribe((element) => {
        this.userpassword = element.password;
        takeUntil(this._destorySubj$)
      },
      error=>{
        this.error=error.message
      });
  }
  
  changepassword() {
    this.oldpassword = this.passwordform.get('oldpassword')?.value;
    this.newpassword = this.passwordform.get('password')?.value;
    this.confirmpassword = this.passwordform.get('confirmpassword')?.value;
    if (this.userpassword == this.oldpassword) {
      this.userpassword=this.newpassword;
      this.http
        .patch('http://localhost:3000/users/' + this.userId, {
          password: this.newpassword,
          confirmpassword: this.confirmpassword,
        })
        .subscribe(
          element=>{console.log("successful"),
          takeUntil(this._destorySubj$)
          },
          error=>{this.error=error.message}
        );
    }
    this.passwordform.reset();
  }
  ngOnDestroy(): void {
    this._destorySubj$.next(true)
    this._destorySubj$.complete()
    this._destorySubj$.unsubscribe()
  }

}
