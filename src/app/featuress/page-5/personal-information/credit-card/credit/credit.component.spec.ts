import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditComponent } from './credit.component';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CreditComponent', () => {
  let component: CreditComponent;
  let fixture: ComponentFixture<CreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreditComponent],
      imports:[HttpClientTestingModule , HttpClientModule , RouterTestingModule, FormsModule , ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
