import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/service/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserDataType } from '../../../../core/interfaces/user.interfaces';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss',
})
export class AuthorizationComponent  implements OnInit, OnDestroy{
  userinfo: { email: string; password: string } = { email: '', password: '' };
  dataForm: FormGroup;
  id:number=0;
  private _destorySubj$ = new Subject();
  error:string='';
  ngOnInit(): void {
    this.activrout.params.subscribe((parms:Params)=>{
      this.id=parms['id'],
      takeUntil(this._destorySubj$)
    },error=>{
      this.error=error.message;
      
    })
  
  }
  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private router: Router,
    private activrout:ActivatedRoute
  ) {
    this.dataForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }
  autorization() {
    this.userinfo.email = this.dataForm.get('email')?.value,
      this.userinfo.password = this.dataForm.get('password')?.value,
      this.http.get<any>('http://localhost:3000/users').subscribe((element) => {
        let userId=0;
        const users = element.find((user: any) => {
          if (
            user.email == this.userinfo.email &&
            user.password == this.userinfo.password
          ) {
            userId=user.id;
            this.auth.isLoggedId.next(user.id) ;
            this.auth.isloggedin = true;
            
          }
          return (
            user.email == this.userinfo.email &&
            user.password == this.userinfo.password
          );
        });
        if (users) {

          if(this.id>0){
            
            if(this.activrout.snapshot.fragment){
            
              let sevedtourid=users.saved.findIndex((element:any) => element == this.id);
              if(sevedtourid<0){
users.saved.push(this.id);
                this.http
                .patch<UserDataType>('http://localhost:3000/users/' + userId, {
                  saved:users.saved,
                })
                .subscribe();
                this.router.navigate(['/tour',this.id], {
                  queryParams: { userId: userId },
                });
              }else{
                this.router.navigate(['/tour',this.id], {
                  queryParams: { userId: userId },
                });
              }
            }else{
              this.router.navigate(['/checkout',this.id],{queryParams:{userId:userId}});
            }
            
          }else{
            this.router.navigate(['/user-page/my-data'],{queryParams:{userId:userId}});
          }
          
          this.dataForm.reset();
        } else {
          this.auth.isloggedin = false;
        }
        takeUntil(this._destorySubj$);

      },
      error=>{this.error=error.message});
  }
  registration(){
    if (this.activrout.snapshot.fragment) {
      this.router.navigate(['/registration', this.id], {
        queryParamsHandling: 'preserve',
        fragment: 'saved',
      });
    } else {
      this.router.navigate(['/registration', this.id], {
        queryParamsHandling: 'preserve',
      });
    }
  }
  ngOnDestroy(): void {
    this._destorySubj$.next(true)
    this._destorySubj$.complete()
    this._destorySubj$.unsubscribe()
  }

}
