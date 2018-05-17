import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ToDo } from '../models/to-do.model';

@Injectable()
export class TaskService {
  tasks: Observable<any>;
  constructor(private httpClient : HttpClient)  {
    
}

  getTasks() {
    this.tasks = this.httpClient.get('/api/values')
  return this.tasks;
}
addTask(newTask: ToDo) {
    //this.tasks.push(newTask);
    console.log(newTask.$key);
  }

getTaskById(taskId: string){
  return; // this.database.object('tasks/' + taskId);
}

}
