import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { PokemonDetailComponent } from "../pokemon-detail/pokemon-detail.component";
@Component({
  selector: "app-pokemon-list",
  imports: [PokemonDetailComponent],
  templateUrl: "./pokemon-list.component.html",
  styleUrl: "./pokemon-list.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent {
  public pokemons = [
    { name: "Gastly", src: "https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F092.webp&w=640&q=75", skills: "Bola sombra", types: "Fantasma", },
    { name: "Haunter", src: "https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F093.webp&w=640&q=75", skills: "Psicorayo", types: "Fantasma", },
    { name: "Gengar", src: "https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F094.webp&w=640&q=75", skills: "Intimidación", types: "Fantasma", },
    { name: "Zekrom", src: "https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F644.webp&w=640&q=75", skills: "Bola Voltio", types: "Dragón", },	
    { name: "Reshiram", src: "https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F643.webp&w=640&q=75", skills: "Llamarada", types: "Dragón", },	

  ]
  clickName(frase:string) {
    console.log(frase);
  }
}
