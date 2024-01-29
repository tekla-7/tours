import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss',
})
export class AuthorizationComponent {
  userinfo: { email: string; password: string } = { email: '', password: '' };
  dataForm: FormGroup;

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private router: Router
  ) {
    this.dataForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }
  autorization() {
    (this.userinfo.email = this.dataForm.get('email')?.value),
      (this.userinfo.password = this.dataForm.get('password')?.value),
      this.http.get<any>('http://localhost:3000/users').subscribe((element) => {
        const users = element.find((user: any) => {
          if (
            user.email == this.userinfo.email &&
            user.password == this.userinfo.password
          ) {
            this.auth.isLoggedId = user.id;
            this.auth.isloggedin = true;
          }
          return (
            user.email == this.userinfo.email &&
            user.password == this.userinfo.password
          );
        });
        if (users) {
          this.router.navigate(['/user-page']);
          this.dataForm.reset();
        } else {
          this.auth.isloggedin = false;
        }
      });
  }
}
