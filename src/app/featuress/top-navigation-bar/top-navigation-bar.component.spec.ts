import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavigationBarComponent } from './top-navigation-bar.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TopNavigationBarComponent', () => {
  let component: TopNavigationBarComponent;
  let fixture: ComponentFixture<TopNavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopNavigationBarComponent],
      imports:[RouterTestingModule , HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
