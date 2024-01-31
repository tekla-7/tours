import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { tourDataType } from '../../../../core/tour.interfaces';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserDataType } from '../../../../core/user.interfaces';
import { HttpClient } from '@angular/common/http';
import { InformationService } from '../../../page-1/slideshow/information.service';

@Component({
  selector: 'app-my-tour',
  templateUrl: './my-tour.component.html',
  styleUrl: './my-tour.component.scss',
})
export class MyTourComponent implements OnInit {
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
        for (const item of element.mytour) {
          this.tourlist.push(this.information.getone(item));
          this.mylist.push(item);
        }  
      });
    
      
  
}
 
}
