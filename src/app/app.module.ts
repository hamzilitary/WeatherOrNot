import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TaskService } from './services/task.service';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { DetailComponent } from './detail/detail.component';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
