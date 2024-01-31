import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { UserDataType } from '../../../core/user.interfaces';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit {
  userinfo:UserDataType = {
    email: '',
    password: '',
    confirmpassword: '',
    card:[],
    name:'',
    lastname:'',
    phone:0,
    saved:[],
    mytour:[],
    oldtour:[],
    };
  dataForm: FormGroup;
  useristaken = false;
  id: number = 0;
  constructor(
    private http: HttpClient,
    private activrout: ActivatedRoute,
    private router: Router
  ) {
    this.dataForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      confirmpassword: new FormControl(null),
    });
  }
  ngOnInit(): void {
  this.activrout.params.subscribe((parms:Params)=>{
    this.id=parms['id']
  })

  }
  registration() {
    (this.userinfo.email = this.dataForm.get('email')?.value),
      (this.userinfo.password = this.dataForm.get('password')?.value),
      (this.userinfo.confirmpassword =
        this.dataForm.get('confirmpassword')?.value),
      this.http
        .get<any>('http://localhost:3000/users')
        .subscribe((elements) => {
          let userId=elements.length+1;
          const user = elements.find((element: any) => {
            return element.email == this.userinfo.email;
          });
          if (!user) {
            this.useristaken = false;
            if (this.id > 0) {
              this.router.navigate(['/checkout',this.id],{queryParams:{userId:userId}});
            } else {
              this.router.navigate(['/user-page/my-data'],{queryParams:{userId:userId}});
            };
            this.http
              .post<UserDataType>('http://localhost:3000/users', this.userinfo)
              .subscribe();
          } else {
            this.useristaken = true;
          }
        });
    this.dataForm.reset();
  }
  autorization() {
    this.router.navigate(['/authorization',this.id]);
  }
}
