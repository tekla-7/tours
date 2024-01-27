import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTourComponent } from './about-tour.component';

describe('AboutTourComponent', () => {
  let component: AboutTourComponent;
  let fixture: ComponentFixture<AboutTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutTourComponent]
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
