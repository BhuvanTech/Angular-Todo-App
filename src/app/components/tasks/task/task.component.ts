import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input({required:true}) userTask!: Task;
  // @Output() complete = new EventEmitter<string>();

  private tasksService = inject(TaskService);

  onCompeteTask(){
    this.tasksService.removeTask(this.userTask.id);
  }

}
