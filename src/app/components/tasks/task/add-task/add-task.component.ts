import { Component, EventEmitter, inject, Input, NgModule, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddTaskData } from '../task.model';
import {TaskService} from '../../tasks.service'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Input({required: true}) userId! : string;
  @Output() close = new EventEmitter<void>();

  enteredTitle  = '';
  // enteredTitle  = signal(''); use can also use singal with comb ngModel
  enteredSummary = '';
  enteredDueDate = '';

  private tasksService = inject(TaskService);

  onCancelClick(){
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate
    }, this.userId);
    
    this.close.emit();
  }
}
