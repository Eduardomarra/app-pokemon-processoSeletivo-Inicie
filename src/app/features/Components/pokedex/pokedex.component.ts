import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from '../../services/api-pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit{

  endPoint: number = 0;
  limited: number = 10;
  public getAllPokemons: any;

  constructor(private apiPokemonService: ApiPokemonService){}

  ngOnInit():void {
    this.apiGetAllPokemons();
  }

  public apiGetAllPokemons():void {
     this.apiPokemonService.getAllpokemons(this.endPoint, this.limited).subscribe(
      (res) => {
        this.getAllPokemons = res.results
        console.log( this.getAllPokemons)
      }
    );
  }

  public nextPagePokemon() {
    if(this.endPoint == 90 ) {
      return

    }
    this.endPoint += 10;
    this.apiGetAllPokemons();
  }

  public prevPagePokemon() {
    if(this.endPoint ==0 ) {
      return
    }
    this.endPoint -= 10;
    this.apiGetAllPokemons();
  }
}
