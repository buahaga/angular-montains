import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DraggableDirective } from './draggable.directive';

@Component({
  template: `<div position="absolute" [style.left]="position + 'px'" top="0" width="20px" height="20px" appDraggable>[DIV]<div>`,
  styles: ['div:hover { background-color: red; }']
})
class TestDragComponent {
  @Input() position: number;
}

describe('DraggableDirective', () => {
  let component: TestDragComponent;
  let fixture: ComponentFixture<TestDragComponent>;
  let dragElement: DebugElement;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [TestDragComponent, DraggableDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDragComponent);
    component = fixture.componentInstance;
    dragElement = fixture.debugElement.query(By.css('div'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change position on drag', () => {
    dragElement.triggerEventHandler('mousedown', { pageX: 5, pageY: 5 });
    dragElement.triggerEventHandler('mousemove', { pageX: 50 });
    dragElement.triggerEventHandler('mouseup', null);
    fixture.detectChanges();
    expect(dragElement.nativeElement.style.left).toBe('');
  });

});
