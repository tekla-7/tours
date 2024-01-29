import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
userinfo:{email:string,password:string, confirmpassword:string}={email:'',password:'',confirmpassword:''};
dataForm:FormGroup;
useristaken=false;
constructor(private http:HttpClient){
this.dataForm=new FormGroup({
  email: new FormControl(null, [Validators.required, Validators.email]),
  password: new FormControl(null, [ Validators.required,]),
  confirmpassword: new FormControl(null),
})
}
registration(){
  this.userinfo.email=this.dataForm.get('email')?.value,
  this.userinfo.password=this.dataForm.get('password')?.value,
  this.userinfo.confirmpassword=this.dataForm.get('confirmpassword')?.value,  
  this.http
      .get<any>('http://localhost:3000/users')
      .pipe()
      .subscribe((elements) => {
        const user = elements.find((element: any) => {
         return element.email == this.userinfo.email

        });
        if (!user) {
          this.useristaken=false;
          this.http
            .post<{email:string,password:string, confirmpassword:string}>('http://localhost:3000/users',this.userinfo)
            .subscribe();
        } else {
          this.useristaken=true;
        }
      });
      this.dataForm.reset();
}


}
