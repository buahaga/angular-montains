import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RangeSliderComponent } from './range-slider.component';
import { By } from '@angular/platform-browser';

describe('RangeSliderComponent', () => {
  let component: RangeSliderComponent;
  let fixture: ComponentFixture<RangeSliderComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [RangeSliderComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
