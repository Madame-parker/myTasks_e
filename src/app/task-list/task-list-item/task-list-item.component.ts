import { Component, input, output } from '@angular/core';
import { Task } from '../../models/task';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task-list-item',
  imports: [
    NgClass
  ],
  templateUrl: './task-list-item.component.html',
  styleUrl: './task-list-item.component.css'
})
export class TaskListItemComponent {
task = input.required<Task>()
taskStatus!: string
toggleTaskEvent = output()
deleteTask = output()

ngOnInit(){
  this.taskStatus = this.task().status
}


toggleTask(){
  this.task().checked = !this.task().checked
  this.task().checked ? this.taskStatus = "completed" : this.taskStatus = "incompleted"

  this.toggleTaskEvent.emit()
}

delete(){
    this.deleteTask.emit()
}

}
