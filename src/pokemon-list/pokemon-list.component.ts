import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from "@angular/core";
import { PokemonDetailComponent } from "../pokemon-detail/pokemon-detail.component";
import { PokemonServiceService } from "../pokemon-service.service";
import { JsonPipe } from "@angular/common";
import { PaginatorComponent } from "../paginator/paginator.component";
@Component({
  selector: "app-pokemon-list",
  imports: [PokemonDetailComponent, JsonPipe, PaginatorComponent],
  templateUrl: "./pokemon-list.component.html",
  styleUrl: "./pokemon-list.component.scss",
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent {
  //Cambiar el tipo any para que acepte cualquier tipo de dato
  public pokemons: any[] = [];

  constructor() {
    this.getPokemonService.getPokemonList().subscribe((data) => {
      this.pokemons = data.results;
    });
  }

  private getPokemonService = inject(PokemonServiceService);
  clickName(frase: string) {
    console.log(frase);
  }

  prevPage() {
    console.log();
  }

  nextPage() {
    console.log();
  }
}
