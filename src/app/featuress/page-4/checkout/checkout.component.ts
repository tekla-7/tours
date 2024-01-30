import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { tourDataType } from '../../../core/tour.interfaces';
import { InformationService } from '../../page-1/slideshow/information.service';
import { AuthService } from '../../../core/auth.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent implements OnInit {
  id: number = 0;
  userId: number = 0;
  tourlist: tourDataType = {};
  isLoggedId: number = 0;
  cardForm: FormGroup;
  cardinfo: {
    cardname?: number;
    cardnumber?: number;
    cardexpirationdate?: number;
    cardcvv?: number;
  } = {};
  ngOnInit(): void {
    this.activrout.params.subscribe((parms: Params) => {
      this.id = parms['id'];
    });
    this.tourlist = this.information.getone(this.id - 1);

    //   this.activrout.snapshot.queryParams
    this.activrout.queryParams.subscribe((queryParams: Params) => {
      this.userId = queryParams['userId'];
    });
  }
  constructor(
    private activrout: ActivatedRoute,
    private information: InformationService,
    private auth: AuthService,
    private http: HttpClient,
    private router: Router
  ) {
    this.cardForm = new FormGroup({
      cardname: new FormControl(null, [Validators.required]),
      cardnumber: new FormControl(null, [
        Validators.required,
        Validators.max(16),
      ]),
      cardexpirationdate: new FormControl(null),
      cardcvv: new FormControl(null),
      saved: new FormControl(true),
    });
  }
  checkout() {
    
    
    this.cardinfo.cardname = this.cardForm.get('cardname')?.value;
    this.cardinfo.cardnumber = this.cardForm.get('cardnumber')?.value;
    this.cardinfo.cardexpirationdate =
      this.cardForm.get('cardexpirationdate')?.value;
    this.cardinfo.cardcvv = this.cardForm.get('cardcvv')?.value;
    if (this.cardForm.get('saved')?.value) {  
      this.http
        .patch('http://localhost:3000/users/' + this.userId,{'cards':this.cardinfo} )
        .subscribe();
    }
 this.router.navigate(['successful-operation'],{queryParamsHandling:'preserve'});
  }
  
}
