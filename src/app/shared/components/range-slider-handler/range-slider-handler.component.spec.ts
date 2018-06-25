import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RangeSliderHandlerComponent } from './range-slider-handler.component';
import { By } from '@angular/platform-browser';

describe('RangeSliderHandlerComponent', () => {
  let component: RangeSliderHandlerComponent;
  let fixture: ComponentFixture<RangeSliderHandlerComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [RangeSliderHandlerComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeSliderHandlerComponent);
    component = fixture.componentInstance;
    component.position = 1;
    component.control = new FormControl(1);
    component.control.setValue(1);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event on drag', () => {
    spyOn(component.positionChange, 'emit');
    component.onDrag(50);
    expect(component.positionChange.emit).toHaveBeenCalledWith(4);
  });

  it('should set value to formControl on dragEnd', () => {
    component.onDragEnd();
    expect(component.control.value).toBe(1);
  });

});
