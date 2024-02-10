import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourCardComponent } from './tour-card.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TourCardComponent', () => {
  let component: TourCardComponent;
  let fixture: ComponentFixture<TourCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TourCardComponent],
      imports:[RouterTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TourCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
