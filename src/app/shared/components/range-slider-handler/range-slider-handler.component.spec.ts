import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RangeSliderHandlerComponent } from './range-slider-handler.component';
import { By } from '@angular/platform-browser';

describe('RangeSliderHandlerComponent', () => {
  let component: RangeSliderHandlerComponent;
  let fixture: ComponentFixture<RangeSliderHandlerComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [RangeSliderHandlerComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeSliderHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
