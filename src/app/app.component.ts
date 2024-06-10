import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoDirective } from './directives/demo.directive';
import { UserFormComponent } from './user-form/user-form.component';
import { ShowInfoComponent } from './show-info/show-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DemoDirective, UserFormComponent, ShowInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tutorialAngular17';
}
