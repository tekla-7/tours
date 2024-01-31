import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { UserDataType } from '../../../../core/user.interfaces';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrl: './update-password.component.scss',
})
export class UpdatePasswordComponent implements OnInit{
  passwordform: FormGroup;
  userId: number = 0;
  oldpassword: string = '';
  newpassword: string = '';
  confirmpassword: string = '';
  userpassword: string = '';
  constructor(private activrout: ActivatedRoute, private http: HttpClient) {
    this.passwordform = new FormGroup({
      oldpassword: new FormControl(null),
      newpassword: new FormControl(null),
      confirmpassword: new FormControl(null),
    });
    this.activrout.queryParams.subscribe((queryParams: Params) => {
      this.userId = queryParams['userId'];
    });
  }
  ngOnInit(): void {
    this.http
      .get<UserDataType>('http://localhost:3000/users/' + this.userId)
      .subscribe((element) => {
        this.userpassword = element.password;
      });
  }
  
  changepassword() {
    this.oldpassword = this.passwordform.get('oldpassword')?.value;
    this.newpassword = this.passwordform.get('newpassword')?.value;
    this.confirmpassword = this.passwordform.get('confirmpassword')?.value;
    if (this.userpassword == this.oldpassword) {
      this.userpassword=this.newpassword;
      this.http
        .patch('http://localhost:3000/users/' + this.userId, {
          password: this.newpassword,
          confirmpassword: this.confirmpassword,
        })
        .subscribe();
    }
    this.passwordform.reset();
  }
}
