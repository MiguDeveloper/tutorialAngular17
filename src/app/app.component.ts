import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListModule } from './task-list/task-list.module';
import { TaskListOnlyStandaloneComponent } from './task-list-only-standalone/task-list-only-standalone.component';
import { TaskListNewSyntaxComponent } from './task-list-new-syntax/task-list-new-syntax.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TaskListModule,
    TaskListOnlyStandaloneComponent,
    TaskListNewSyntaxComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tutorialAngular17';
}
