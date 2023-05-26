import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {

  private baseURL: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private httpClient: HttpClient) { }

  public getAllpokemons(endPoint: number, limited: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}?offset=${endPoint}&limit=${limited}`).pipe(
      tap(res => res),
      tap(res => {
        res.results.map((resPokemons:any) => {
          this.apiGetPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
          )
        })
      })
    )
  }

  public apiGetPokemons(url: string):Observable<any>{
    return this.httpClient.get<any>(url).pipe(
      map(
        res => res
      )
    )
  }

  public searchPokemon(namePokemon: string):Observable<any> {
    const url = `${this.baseURL}${namePokemon}`;
    return this.httpClient.get<any>(url);

  }
}
