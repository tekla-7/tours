import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersofthedayComponent } from './offersoftheday.component';

describe('OffersofthedayComponent', () => {
  let component: OffersofthedayComponent;
  let fixture: ComponentFixture<OffersofthedayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OffersofthedayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffersofthedayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
