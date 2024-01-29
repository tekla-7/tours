import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedId: number = 0;
  isloggedin = false;

  constructor(private http: HttpClient) {}
  
}
