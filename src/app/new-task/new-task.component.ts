import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  inputReference = viewChild<ElementRef<HTMLInputElement>>('inputTaskFields')

  addTask(){
    let taskvalue = this.inputReference()!.nativeElement
      
  }

}