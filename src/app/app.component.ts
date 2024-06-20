import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokemonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tutorialAngular17';
}
