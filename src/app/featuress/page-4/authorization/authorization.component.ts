import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss',
})
export class AuthorizationComponent  implements OnInit{
  userinfo: { email: string; password: string } = { email: '', password: '' };
  dataForm: FormGroup;
  id:number=0;
  ngOnInit(): void {
    this.activrout.params.subscribe((parms:Params)=>{
      this.id=parms['id']
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
            this.router.navigate(['/checkout',this.id],{queryParams:{userId:userId}});
            
          }else{
            this.router.navigate(['/user-page/my-data'],{queryParams:{userId:userId}});
          }
          
          this.dataForm.reset();
        } else {
          this.auth.isloggedin = false;
        }
      });
  }
}
