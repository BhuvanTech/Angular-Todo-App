import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from "./components/user/user.component";
import { SharedModule } from "./components/shared/shared.module";
import { TasksModule } from "./components/tasks/tasks.module";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent],
    bootstrap: [AppComponent],       // specifing root component
    imports: [BrowserModule, SharedModule, TasksModule]       // Used to specify standalone and other components
})
export class AppModule{

}