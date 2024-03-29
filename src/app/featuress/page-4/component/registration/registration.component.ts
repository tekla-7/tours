import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { UserDataType } from '../../../../core/interfaces/user.interfaces';
import { AuthService } from '../../../../core/service/auth.service';
import { Subject, takeUntil } from 'rxjs';
import { passwordvalidator } from '../../../../core/interfaces/passwordconfirm-validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit , OnDestroy{
  userinfo: UserDataType = {
    email: '',
    password: '',
    confirmpassword: '',
    card: [],
    name: '',
    lastname: '',
    phone: 0,
    saved: [],
    mytour: [],
    oldtour: [],
  };
  dataForm: FormGroup;
  useristaken = false;
  id: number = 0;
  issaved: string = '';
 error:string='';
  private _destorySubj$ = new Subject()

  constructor(
    private http: HttpClient,
    private activrout: ActivatedRoute,
    private router: Router,
    private auth:AuthService
  ) {
    this.dataForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      confirmpassword: new FormControl(null ,[Validators.required]),
    },
    {
      validators: passwordvalidator,
    }
    );
  }
  ngOnInit(): void {
    this.activrout.params.subscribe((parms: Params) => {
      this.id = parms['id'];
      takeUntil(this._destorySubj$)
    },
    error=>{
      this.error=error.message
    });
    this.activrout.snapshot.fragment;
  }
  registration() {
    (this.userinfo.email = this.dataForm.get('email')?.value),
      (this.userinfo.password = this.dataForm.get('password')?.value),
      (this.userinfo.confirmpassword =
        this.dataForm.get('confirmpassword')?.value),
      this.http
        .get<any>('http://localhost:3000/users')
        .subscribe((elements) => {
          let userId = elements.length + 1;
          const user = elements.find((element: any) => {
            return element.email == this.userinfo.email;
          });
          if (!user) {
            this.useristaken = false;
            this.auth.isloggedin=true;
            if (this.id > 0) {
              if (this.activrout.snapshot.fragment) {
                this.userinfo.saved.push(this.id);
                this.router.navigate(['/tour',this.id], {
                  queryParams: { userId: userId },
                });
              } else {
                this.router.navigate(['/checkout', this.id], {
                  queryParams: { userId: userId },
                });
              }
            } else {
              this.router.navigate(['/user-page/my-data'], {
                queryParams: { userId: userId },
              });
            }
            this.http
              .post<UserDataType>('http://localhost:3000/users', this.userinfo)
              .subscribe();
          } else {
            this.auth.isloggedin=false;
            this.useristaken = true;
          }
          takeUntil(this._destorySubj$);
        },
      error=>{
        this.error=error.message
      } );

    this.dataForm.reset();
  }
  autorization() {
    if (this.activrout.snapshot.fragment) {
      this.router.navigate(['/authorization', this.id], {
        queryParamsHandling: 'preserve',
        fragment: 'saved',
      });
    } else {
      this.router.navigate(['/authorization', this.id], {
        queryParamsHandling: 'preserve',
      });
    }
  }
  ngOnDestroy(): void {
    this._destorySubj$.next(true);
    this._destorySubj$.complete();
    this._destorySubj$.unsubscribe();
  }
}
