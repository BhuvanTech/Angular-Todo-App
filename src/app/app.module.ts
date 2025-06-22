import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from "./components/user/user.component";
import { TasksComponent } from "./components/tasks/tasks.component";

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],       // specifing root component
    imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent]       // Used to specify standalone and other components
})
export class AppModule{

}