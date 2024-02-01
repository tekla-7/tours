import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserDataType } from '../../core/user.interfaces';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-top-navigation-bar',
  templateUrl: './top-navigation-bar.component.html',
  styleUrl: './top-navigation-bar.component.scss',
})
export class TopNavigationBarComponent implements OnInit {
  userId: number = 0;
  mytour: number = 0;
  isloggin:boolean=false;
  constructor(private activrout: ActivatedRoute, private http: HttpClient , private auth:AuthService , private router:Router) {
    this.activrout.queryParams.subscribe((queryParams: Params) => {
      if (queryParams['userId']>0) {
        this.isloggin=true;
        this.userId=queryParams['userId'];
        this.http
          .get<UserDataType>(
            'http://localhost:3000/users/' + +queryParams['userId']
          )
          .subscribe((element) => {
            this.mytour = element.mytour.length;
          });
      }else{
        this.isloggin=false;
      }
    });
  }
  ngOnInit(): void {}
  out() {
    this.auth.isloggedin = false;
    this.auth.isLoggedId.next(0);
    this.router.navigate(['/'],{queryParams:{userId:0}});
  }
}
