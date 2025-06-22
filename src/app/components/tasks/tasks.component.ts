import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { tick } from '@angular/core/testing';
import { AddTaskComponent } from "./task/add-task/add-task.component";
import { AddTaskData } from './task/task.model';

import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input({required:true})  userId!: string;
  @Input() userName?: string;
  // @Input() userName: string | undefined;

  isAddingTask = false;

  constructor(private tasksService: TaskService){

  }

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  // onCompleteTask(id: string){
  //   this.tasksService.removeTask(id);
  // }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
