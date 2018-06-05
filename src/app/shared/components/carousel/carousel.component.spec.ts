import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import { By } from '@angular/platform-browser';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [CarouselComponent]
    })
      .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    component.imagesSrc = [
      'http://dummyimage.com/1200x300.png/cc0000/ffffff',
      'http://dummyimage.com/900x300.png/5fa2dd/ffffff',
      'http://dummyimage.com/1400x400.png/ff4444/ffffff',
      'http://dummyimage.com/1200x400.png/dddddd/ffffff',
      'http://dummyimage.com/1000x300.png/5fa2dd/ffffff'
    ];
    component.currentSlide = 0;
    component.containerPosition = '0px';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create slider whit 5 slides', (() => {
    const expected = 5;
    const slidesLength = fixture.debugElement.queryAll(By.css('.carousel-item')).length;
    expect(slidesLength).toEqual(expected);
  }))

  it('should create slider whit 7 control buttons', (() => {
    const expected = 7;
    const buttons = fixture.debugElement.queryAll(By.css('button')).length;
    expect(buttons).toEqual(expected);
  }))

  it('should change containerPostition on nextSlide()', (() => {
    const expected = `-${component.containerSize.width}px`;
    component.nextSlide();
    expect(component.containerPosition).toEqual(expected);
  }))

  it('should change containerPosition on prevSlide()', (() => {
    const expected = `-${component.containerSize.width * 4}px`;
    console.log(component.containerSize.width)
    component.prevSlide();
    expect(component.containerPosition).toEqual(expected);
  }))

  it('should increase currentSlide value on nextSlide()', (() => {
    const expected = 1;
    component.nextSlide();
    expect(component.currentSlide).toEqual(expected);
  }))

  it('should change currentSlide value on first nextSlide() to 4', (() => {
    const expected = 4;
        console.log(component.currentSlide)
    component.prevSlide();
    expect(component.currentSlide).toEqual(expected);
  }))

});
