import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTourComponent } from './my-tour.component';

describe('MyTourComponent', () => {
  let component: MyTourComponent;
  let fixture: ComponentFixture<MyTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyTourComponent]
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
