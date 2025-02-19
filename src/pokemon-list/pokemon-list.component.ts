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
    { name: "Gastly", src: "https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F092.webp&w=640&q=75", skills: "[Hipnosis,Lengüetazo]", types: "[Fantasma,Veneno]", },
    { name: "Haunter", src: "https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F093.webp&w=640&q=75", skills: "[Puño Sombra,Rencor]", types: "[Fantasma,Veneno]", },
    { name: "Gengar", src: "https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F094.webp&w=640&q=75", skills: "[Puño Sombra,Rencor]", types: "[Fantasma,Veneno]", },
    { name: "Zekrom", src: "https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F644.webp&w=640&q=75", skills: "Terravoltaje", types: "[Dragón, Eléctrico]", },	
    { name: "Reshiram", src: "https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F643.webp&w=640&q=75", skills: "Turbollama", types: "[Dragón,Fuego]", },	
    { name: "Rayquaza", src: "https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F384.webp&w=640&q=75", skills: "[Enfado,Ascenso Draco]", types: "[Dragón, Volador]" },
    { name: "Lucario", src: "https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F448.webp&w=640&q=75", skills: "[Esfera Aural,Puño Bala]", types: "[Lucha,Acero]" },
    { name: "Charizard", src: "https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F006.webp&w=640&q=75", skills: "[Lanzallamas,Vuelo]", types: "[Fuego,Volador]" },
    { name: "Tyranitar", src: "https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F248.webp&w=640&q=75", skills: "[Mordisco,Triturar]", types: "[Roca,Siniestro]" },
    { name: "Metagross", src: "https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F376.webp&w=640&q=75", skills: "[Puño Meteoro,Psiquico]", types: "[Acero,Psiquico]" },
    { name: "Greninja", src: "https://db.pokemongohub.net/_next/image?url=%2Fimages%2Fofficial%2Ffull%2F658.webp&w=640&q=75", skills: "[Shuriken de Agua,Pulso Umbrío]", types: "[Agua,Siniestro]" },
];
  clickName(frase:string) {
    console.log(frase);
  }
}
