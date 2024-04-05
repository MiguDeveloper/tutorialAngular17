import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LikeComponent } from './like/like.component';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LikeComponent, UserFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tutorialAngular17';
}
