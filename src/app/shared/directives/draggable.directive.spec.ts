import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, Input, Output, ElementRef, ViewChild, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DraggableDirective } from './draggable.directive';
import * as sinon from 'sinon';

@Component({
  selector: 'app-test',
  template: `<div class="handler" appDraggable [style.left]="position + 'px'" (drag)="onDrag($event)"></div>`,
  styles: [
      `.handler {
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: black;`
      ]
})
class TestDragComponent {
  position: number;
  onDrag = sinon.spy();
}

describe('DraggableDirective', () => {
  let component: TestDragComponent;
  let fixture: ComponentFixture<TestDragComponent>;
  let dragElement: DebugElement;
  let directiveInstance: DraggableDirective;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [TestDragComponent, DraggableDirective]
    })
    fixture = TestBed.createComponent(TestDragComponent);
    component = fixture.componentInstance;
    component.position = 0;
    dragElement = fixture.debugElement.query(By.directive(DraggableDirective));
    directiveInstance = dragElement.injector.get(DraggableDirective);
    fixture.detectChanges();
  }));

  it('it should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should emit event on drag', () => {
    spyOn(directiveInstance.drag, 'emit');
    dragElement.triggerEventHandler('mousedown', { clientX: 5, clientY: 5 });
    dragElement.triggerEventHandler('mousemove', { clientX: 50, clientY: 5 });
    dragElement.triggerEventHandler('mouseup', { clientX: 50, clientY: 5 });
    // expect(component.onDrag.getCall()).toHaveBeenCalled();
    expect(directiveInstance.drag.emit).toHaveBeenCalled();
  });

});
