import { Component,  OnInit } from '@angular/core';
import { ToDo } from '../models/to-do.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
  providers: [TaskService]
})
export class NewTaskComponent implements OnInit {
  suggest:boolean = true;
  constructor(private taskService: TaskService) { }

  addTask(task: string, description: string, conditions: string, temperature: string, suggest: boolean) {
    let newToDo: ToDo = new ToDo(task, description, conditions, parseInt(temperature))

      newToDo.suggest = this.suggest;

    // this.taskService.create(ToDo);
    // this.createdSender.emit(newToDo);
    this.taskService.addTask(newToDo);

  }



  ngOnInit() {
  }

}
