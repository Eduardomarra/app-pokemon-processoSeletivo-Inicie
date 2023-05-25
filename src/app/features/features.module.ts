import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './Components/header/header.component';
import { FavoritePokemonsComponent } from './Components/favorite-pokemons/favorite-pokemons.component';
import { PokedexComponent } from './Components/pokedex/pokedex.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FavoritePokemonsComponent,
    PokedexComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class FeaturesModule { }
