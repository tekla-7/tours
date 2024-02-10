import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTourComponent } from './my-tour.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MyTourComponent', () => {
  let component: MyTourComponent;
  let fixture: ComponentFixture<MyTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyTourComponent],
      imports:[RouterTestingModule , HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
