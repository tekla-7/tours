import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedId=new Subject<number>();
  isloggedin = false;
  LoginOrLogout = new Subject<number>;
  constructor(private http: HttpClient ) {}
  
}
