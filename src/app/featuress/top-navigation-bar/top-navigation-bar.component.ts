import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserDataType } from '../../core/user.interfaces';

@Component({
  selector: 'app-top-navigation-bar',
  templateUrl: './top-navigation-bar.component.html',
  styleUrl: './top-navigation-bar.component.scss',
})
export class TopNavigationBarComponent implements OnInit {
  userId: number = 0;
  mytour: number = 0;
  constructor(private activrout: ActivatedRoute, private http: HttpClient) {
    this.activrout.queryParams.subscribe((queryParams: Params) => {
      if (queryParams['userId']>0) {
        this.userId=queryParams['userId'];
        this.http
          .get<UserDataType>(
            'http://localhost:3000/users/' + +queryParams['userId']
          )
          .subscribe((element) => {
            this.mytour = element.mytour.length;
          });
      }
    });
  }
  ngOnInit(): void {}
}
