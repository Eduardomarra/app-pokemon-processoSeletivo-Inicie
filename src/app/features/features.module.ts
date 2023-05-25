import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './Components/header/header.component';
import { FavoritePokemonsComponent } from './Components/favorite-pokemons/favorite-pokemons.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FavoritePokemonsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class FeaturesModule { }
