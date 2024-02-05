import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/service/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserDataType } from '../../../core/interfaces/user.interfaces';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.scss',
})
export class PersonalInformationComponent implements OnInit{
  userId:number=0;

  ngOnInit(): void {
    this.activrout.queryParams.subscribe((queryParams: Params) => {
      this.userId = queryParams['userId'];
    });
  }
  constructor(private auth: AuthService, private router: Router , private activrout:ActivatedRoute , ) {
   
  }
  logout() {
    this.auth.isloggedin = false;
    this.auth.isLoggedId.next(0);
    this.router.navigate(['/'],{queryParams:{userId:0}});
  }

}
