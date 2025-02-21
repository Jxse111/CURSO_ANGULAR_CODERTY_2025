import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from "@angular/core";
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";
import { PokemonServiceService } from "../pokemon-service.service";
import { JsonPipe } from "@angular/common";
import { PaginatorComponent } from "../paginator/paginator.component";
import { Router } from "@angular/router";
@Component({
  selector: "app-pokemon-list",
  imports: [PokemonCardComponent, JsonPipe, PaginatorComponent],
  templateUrl: "./pokemon-list.component.html",
  styleUrl: "./pokemon-list.component.scss",
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent {
  //Cambiar el tipo any para que acepte cualquier tipo de dato
  public pokemons: any[] = [];
  pages?: any;
  private getPokemonService = inject(PokemonServiceService);
  private router = inject(Router);
  constructor() {
    this.getPokemonService.getPokemonList().subscribe((data) => {
      this.pages = { next: data.next, previous: data.previous };
      this.pokemons = data.results;
    });
  }

  clickName(pokemon: string) {
    this.router.navigate([`/pokemon/${pokemon}`]);
  }

  prevPage() {
    if (this.pages.previous) {
      this.getPokemonService
        .changePage(this.pages.previous)
        .subscribe((data) => {
          this.pages = { next: data.next, previous: data.previous };
          this.pokemons = data.results;
        });
    }
  }

  nextPage() {
    if (this.pages.next) {
      this.getPokemonService.changePage(this.pages.next).subscribe((data) => {
        this.pages = { next: data.next, previous: data.previous };
        this.pokemons = data.results;
      });
    }
  }
}
