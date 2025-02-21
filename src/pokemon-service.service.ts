import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PokemonServiceService {
  private http = inject(HttpClient);
  //Cambiar tipo any por el tipo de dato que se espera
  getPokemonList(): Observable<any> {
    return this.http.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
  }
  changePage(url: string): Observable<any> {
    return this.http.get(url);
  }

  getPokemon(pokemonId: string): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  }
}
