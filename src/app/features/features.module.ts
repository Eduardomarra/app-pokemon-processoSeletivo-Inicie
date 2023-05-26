import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './Components/header/header.component';
import { PokedexComponent } from './Components/pokedex/pokedex.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './Components/details/details.component';
import { RouterLink, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    PokedexComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class FeaturesModule { }
