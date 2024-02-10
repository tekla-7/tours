import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopoffersComponent } from './topoffers.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('TopoffersComponent', () => {
  let component: TopoffersComponent;
  let fixture: ComponentFixture<TopoffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopoffersComponent],
      imports:[ RouterTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
