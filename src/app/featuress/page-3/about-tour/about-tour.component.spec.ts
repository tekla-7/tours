import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { AboutTourComponent } from './about-tour.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AboutTourComponent', () => {
  let component: AboutTourComponent;
  let fixture: ComponentFixture<AboutTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutTourComponent],
      imports:[RouterTestingModule , HttpClientTestingModule],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
