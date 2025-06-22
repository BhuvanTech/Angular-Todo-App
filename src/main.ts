import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Standalone based application
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

// Module based application
platformBrowserDynamic().bootstrapModule(AppModule);