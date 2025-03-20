import { Component, inject, } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { TaskListItemComponent } from "./task-list-item/task-list-item.component";

@Component({
  selector: 'app-task-list',
  imports: [TaskListItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks = inject(TasksService).getAllTasks()


}
