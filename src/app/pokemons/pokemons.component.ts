import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { POKEMONS } from '../models/constants';
import { PokemonComponent } from './pokemon/pokemon.component';
import { IPokemon } from '../models/pokemon.interface';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [MatButtonModule, MatListModule, PokemonComponent],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss',
})
export class PokemonsComponent {
  pokemons = [...POKEMONS];
  pokemonSelected?: IPokemon;

  selectPokemon(pokemon: IPokemon): void {
    this.pokemonSelected = pokemon;
  }

  deletePokemon() {
    this.pokemons = this.pokemons.filter(
      (item) => item !== this.pokemonSelected
    );
    this.pokemonSelected = undefined;
  }
  toggleRestoreList() {
    this.pokemons = [...POKEMONS];
  }
}
