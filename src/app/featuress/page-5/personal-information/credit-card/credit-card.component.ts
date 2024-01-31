import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserDataType } from '../../../../core/user.interfaces';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.scss'
})
export class CreditCardComponent implements OnInit{
  cardlist: {
    cardname?: string;
    cardnumber?: number;
    cardexpirationdate?: number;
    cardcvv?: number;
  }[] = [];
  cardinfo: {
    cardname?: string;
    cardnumber?: number;
    cardexpirationdate?: number;
    cardcvv?: number;
  } = {};
  userId:number=0;
  name:string='';
  lastname:string='';
  phonenumber:number=0;
  isActive=false;
  cardForm:FormGroup;
  constructor(private activrout:ActivatedRoute , private http:HttpClient) {
    this.activrout.queryParams.subscribe((queryParams: Params) => {
      this.userId = queryParams['userId'];
    });
    this.cardForm = new FormGroup({
      cardname: new FormControl(null),
      cardnumber: new FormControl(null),
      cardexpirationdate: new FormControl(null),
      cardcvv: new FormControl(null),
    
    });
  }
  ngOnInit(): void {
     this.http
      .get<UserDataType>('http://localhost:3000/users/' + this.userId)
      .subscribe((element) => {
        for (const item of element.card) {
          this.cardlist.push(item);
        }
      });
    
  }
  delateCard(id:number){
   this.cardlist.splice(id, 1);
   this.http
   .patch('http://localhost:3000/users/' + this.userId, {
     card: this.cardlist
   })
   .subscribe();
  }
  addcard(){
    this.cardinfo.cardname=this.cardForm.get('cardname')?.value;
    this.cardinfo.cardnumber = this.cardForm.get('cardnumber')?.value;
    this.cardinfo.cardexpirationdate =
    this.cardForm.get('cardexpirationdate')?.value;
    this.cardinfo.cardcvv = this.cardForm.get('cardcvv')?.value;
    this.cardlist.push(this.cardinfo);
    this.http
    .patch('http://localhost:3000/users/' + this.userId, {
      card: this.cardlist
    })
    .subscribe();
this.cardForm.reset();
  }

  call(){
    this.isActive=!this.isActive;
  }
}
