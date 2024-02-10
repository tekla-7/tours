import {
  ComponentFixture,
  TestBed,
  discardPeriodicTasks,
  fakeAsync,
  flush,
  tick,
} from '@angular/core/testing';

import { SlideshowComponent } from './slideshow.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserModule } from '@angular/platform-browser';
import { tourDataType } from '../../../core/interfaces/tour.interfaces';
import { InformationService } from '../services/information.service';

describe('SlideshowComponent', () => {
  let component: SlideshowComponent;
  let fixture: ComponentFixture<SlideshowComponent>;
  let informationService = InformationService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlideshowComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SlideshowComponent);
    // informationService=TestBed.inject(InformationService)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should called next method in every 3000', fakeAsync(() => {
    spyOn(component, 'next');
    component.ngOnInit();
    tick(3000);
    expect(component.next).toHaveBeenCalled();
    discardPeriodicTasks();
  }));

  it('should start over', () => {
    component.next();
    expect(component.currentSlide).toEqual(1);
    component.currentSlide = component.slides.length;
    component.next();
    expect(component.currentSlide).toEqual(0);
  });
  it('should call ToSlide and change currentslide', fakeAsync(() => {
    component.ToSlide(2);
    expect(component.currentSlide).toEqual(2);
    tick(3000);
    expect(component.currentSlide).toEqual(3);
    discardPeriodicTasks();
  }));
  it('should call nextPicture and change array', fakeAsync(() => {
    
    let obj: tourDataType = {};
    component.nextPicture(1);
    obj=component.popularNow[0];
    expect(obj).toBe(component.popularNow[0]);
    component.nextPicture(2);
    obj=component.Offeroftheday[0];
    expect(obj).toBe(component.Offeroftheday[0]);
    component.nextPicture(3);
obj=component.Topoffers[0];
expect(obj).toBe(component.Topoffers[0]);
  }));
  it('should call prePicture and change array', fakeAsync(() => {
    
    let obj: tourDataType = {};
    component.prePicture(1);
    obj=component.popularNow[component.popularNow.length - 1];
    component.prePicture(2);
    component.prePicture(3);
  }));
});
