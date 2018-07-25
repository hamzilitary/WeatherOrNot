import { Component, EventEmitter, OnInit } from '@angular/core';
import { ToDo } from './models/to-do.model';
import { TaskService } from './services/task.service'
import { Http } from '@angular/http';     
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private _httpService: Http) { }
    apiValues: string[] = [];
    ngOnInit() {
        this._httpService.get('/api/values').subscribe(values => {
            this.apiValues = values.json() as string[];
        });
    }
}
