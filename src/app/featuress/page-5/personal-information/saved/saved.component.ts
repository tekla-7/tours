import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserDataType } from '../../../../core/user.interfaces';
import { tourDataType } from '../../../../core/tour.interfaces';
import { InformationService } from '../../../page-1/slideshow/information.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrl: './saved.component.scss',
})
export class SavedComponent implements OnInit {
  userId: number = 0;
  mylist: number[] = [];
  tourlist: tourDataType[] = [];
  ngOnInit(): void {
    
   }
  constructor(
    private router: Router,
    private activrout: ActivatedRoute,
    private http: HttpClient,
    private information: InformationService
  ) {
    this.activrout.queryParams.subscribe((queryParams: Params) => {
      this.userId = queryParams['userId'];
    });
    this.http
      .get<UserDataType>('http://localhost:3000/users/' + this.userId)
      .subscribe((element) => {
        for (const item of element.saved) {
          this.tourlist.push(this.information.getone(item));
          this.mylist.push(item);
        }  
      });
      
  
}

}
