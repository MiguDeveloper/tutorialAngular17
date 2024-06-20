import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { IPokemon } from '../../models/pokemon.interface';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss',
})
export class PokemonComponent {
  @Input({ required: true }) pokemon?: IPokemon;
  @Output() onDeleted = new EventEmitter<IPokemon>();

  toggleDeletePokemon() {
    this.onDeleted.emit();
  }
}
