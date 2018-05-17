import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../models/to-do.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {
  @Input() childEditToDo: ToDo;
  @Output() clickedDone = new EventEmitter();

  finishEditing() {
    this.clickedDone.emit();
  }

  constructor() { }



}
