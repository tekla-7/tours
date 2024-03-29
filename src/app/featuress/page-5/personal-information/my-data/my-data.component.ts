import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { UserDataType } from '../../../../core/interfaces/user.interfaces';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrl: './my-data.component.scss',
})
export class MyDataComponent implements OnInit , OnDestroy {
  userform: FormGroup;
  userId:number=0;
  name:string='';
  lastname:string='';
  phonenumber:number=0;
  error:string='';
  private _destorySubj$ = new Subject()
  constructor(private activrout:ActivatedRoute , private http:HttpClient) {
    this.userform = new FormGroup({
      name: new FormControl(null),
      lastname: new FormControl(null),
      phonenumber: new FormControl(null),
    });
    this.activrout.queryParams.subscribe((queryParams: Params) => {
      this.userId = queryParams['userId'];
      takeUntil(this._destorySubj$)

    },error=>{this.error=error.message});
    
  }
  ngOnInit(): void {
      this.http
    .get<UserDataType>('http://localhost:3000/users/' + this.userId).subscribe(element=>{
      this.userform.get('name')?.setValue(element.name);
      this.userform.get('lastname')?.setValue(element.lastname)
      this.userform.get('phonenumber')?.setValue(element.phone)
      takeUntil(this._destorySubj$)
    },error=>{this.error=error.message})
     
  }
  addpersonalData(){
    this.name=this.userform.get('name')?.value;
    this.lastname=this.userform.get('lastname')?.value;
    this.phonenumber=this.userform.get('phonenumber')?.value;
    this.http
    .patch('http://localhost:3000/users/' + this.userId, {
      name:this.name ,lastname:this.lastname ,phone:this.phonenumber,
    })
    .subscribe(element=>{takeUntil(this._destorySubj$)},error=>{this.error=error.message});
    
  }
  ngOnDestroy(): void {
    this._destorySubj$.next(true)
    this._destorySubj$.complete()
    this._destorySubj$.unsubscribe()
  }

}
