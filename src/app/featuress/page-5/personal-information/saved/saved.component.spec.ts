import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedComponent } from './saved.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('SavedComponent', () => {
  let component: SavedComponent;
  let fixture: ComponentFixture<SavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavedComponent],
      imports: [HttpClientModule , RouterTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
