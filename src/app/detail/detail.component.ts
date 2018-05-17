import { Component, OnInit } from '@angular/core';
import { TaskService} from '../services/task.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ToDo } from '../models/to-do.model';
//import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [TaskService]
})
export class DetailComponent implements OnInit {
  taskId: string;
  taskToDisplay;


  constructor(private route: ActivatedRoute, private location: Location, private taskService: TaskService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.taskId = urlParameters['id'];
    });
    this.taskService.getTaskById(this.taskId);//.subscribe(dataLastEmittedFromObserver => {this.taskToDisplay = dataLastEmittedFromObserver;
    //});


  }

}
