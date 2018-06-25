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
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeSliderComponent);
    component = fixture.componentInstance;
    component.minHandlerPosition = 10;
    component.maxHandlerPosition = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change minHandlerPosition if position changed', (() => {
    component.setMinHandlerPosition(4);
    expect(component.minHandlerPosition).toBe(4);
  }));

  it('should change maxHandlerPosition if position changed', (() => {
    component.setMaxHandlerPosition(5);
    expect(component.maxHandlerPosition).toBe(5);
  }));

});
