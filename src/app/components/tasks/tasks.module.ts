import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { AddTaskComponent } from "./task/add-task/add-task.component";
import { TasksComponent } from "./tasks.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [TasksComponent, TaskComponent, AddTaskComponent],
    exports: [TasksComponent],
    imports: [SharedModule, FormsModule, CommonModule]
})
export class TasksModule{

}