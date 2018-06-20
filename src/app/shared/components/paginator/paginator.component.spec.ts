import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { PaginatorComponent } from './paginator.component';
import { By } from '@angular/platform-browser';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [PaginatorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    component.totalPages = 10;
    component.currentPage = 1;
    component.pagination = [1, 2, '...', 10];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create array from min to max', (() => {
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const text = component.makeArray(component.totalPages);
    expect(text).toEqual(expected);
  }));

  it('should create pagination array whit dots', (() => {
    const expected = [1, 2, 3, '...', 10];
    const text = component.makePaginator(component.totalPages, component.currentPage);
    expect(text).toEqual(expected);
  }));

  it('should render left arrow button disabled by default', (() => {
    const btnPrevious = fixture.debugElement.query(By.css('.previous')).nativeElement.disabled;
    const expected = true;
    expect(btnPrevious).toEqual(expected);
  }));

  it('should emit event on click by right arrow button', (() => {
    const btnNext = fixture.debugElement.query(By.css('.next')).nativeElement;
    spyOn(component.pageChange, 'emit');
    btnNext.click();
    expect(component.pageChange.emit).toHaveBeenCalled();
  }));

  it('should display paginator buttons between previous and next', (() => {
    const spanPages = fixture.debugElement.query(By.css('.pagination')).nativeElement.textContent.slice(1, -1);
    const expected = '12...10';
    expect(spanPages).toEqual(expected);
  }));

  it('should emit event whit pagenumber 2 on click by 2 button', (() => {
    const secondBtn = fixture.debugElement.queryAll(By.css('.page-button'))[1].nativeElement;
    spyOn(component.pageChange, 'emit');
    secondBtn.click();
    expect(component.pageChange.emit).toHaveBeenCalledWith(2);
  }))

  it('should not emit event if you click on ... button in paginator', (() => {
    const emptyBtn = fixture.debugElement.queryAll(By.css('.page-button'))[2].nativeElement;
    spyOn(component.pageChange, 'emit');
    emptyBtn.click();
    expect(component.pageChange.emit).not.toHaveBeenCalled();
  }))

});
