import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltoursComponent } from './alltours.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AlltoursComponent', () => {
  let component: AlltoursComponent;
  let fixture: ComponentFixture<AlltoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlltoursComponent],
      imports:[HttpClientTestingModule , HttpClientModule , RouterTestingModule , FormsModule , ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlltoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
