import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiPokemonService } from './../../services/api-pokemon.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';
  public pokemon: any;

  public isLoading: boolean = false;

  public attLife: number = 0;
  public attDefense: number = 0;
  public attSpeed: number = 0;
  public attAttack: number = 0;

  constructor(
    private activatedRouter: ActivatedRoute,
    private apiPokemonService: ApiPokemonService
  ) {}

  ngOnInit(): void {
      this.getPokemon();
  }

  public getPokemon() {
    const id = this.activatedRouter.snapshot.params['id'];
    const pokemon = this.apiPokemonService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.apiPokemonService.apiGetPokemons(`${this.urlName}/${id}`);

    forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res;
        this.isLoading = true;
        this.attLife = res[0].stats[0].base_stat;
        this.attDefense = res[0].stats[2].base_stat;
        this.attSpeed = res[0].stats[5].base_stat;
        this.attAttack = res[0].stats[1].base_stat;
      }
    );
  }
}
