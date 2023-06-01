import { Router } from '@angular/router';
import { ApiPokemonService } from './../../services/api-pokemon.service';
import { Component } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public inputValue = "";
  private baseURL: string = `https://pokeapi.co/api/v2/pokemon/`;
  public pokemon: any;

  public error = new Error("");

  constructor(
    private apiPokemonService: ApiPokemonService,
    private router: Router,
  ) {}


  ngOnInit() {
  }

  keyupInput(event: KeyboardEvent){
    return this.inputValue = (<HTMLInputElement>event.target).value;
  }

  searchPokemon() {
    try {
      this.apiPokemonService.apiGetPokemons(`${this.baseURL}${this.inputValue}`).subscribe(
        res => {
          this.pokemon = res;
          this.router.navigateByUrl(`details/${this.pokemon?.id}`);
        },
        error => {
          console.error('Erro na solicitação:', error);
          alert('Pokemon Não encontrado!');
          this.inputValue = "";
        }
      );
    } catch (error) {
      console.error('Erro ao processar a URL:', error);
      alert('Ocorreu um erro ao processar a URL!');
    }
  }

  // searchPokemon() {
  //   this.apiPokemonService.apiGetPokemons(`${this.baseURL}${this.inputValue}`).pipe(
  //     catchError(error => {
  //       console.error('Erro de conexão:', error);
  //       alert('Ocorreu um erro de conexão!');
  //       return of(null);
  //     })
  //   ).subscribe(res => {
  //     if (res === null) {
  //       return;
  //     }
  //     this.pokemon = res;
  //     this.router.navigateByUrl(`details/${this.pokemon?.id}`);
  //   });
  // }

  // searchPokemon(){
  //   this.apiPokemonService.apiGetPokemons(`${this.baseURL}${this.inputValue}`).subscribe(
  //     res => {
  //       this.pokemon = res
  //       this.router.navigateByUrl(`details/${this.pokemon?.id}`)
  //     }
  //   )
  // }
}
