import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDataComponent } from './my-data.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('MyDataComponent', () => {
  let component: MyDataComponent;
  let fixture: ComponentFixture<MyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyDataComponent],
      imports:[RouterModule , RouterTestingModule , HttpClientTestingModule , FormsModule,
        ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
