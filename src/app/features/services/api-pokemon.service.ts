import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, map, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {

  private baseURL: string = 'https://pokeapi.co/api/v2/pokemon/';

  private valueInput = new BehaviorSubject<[]>([]);
  private searchInputPokemon = this.valueInput.asObservable();

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
}
