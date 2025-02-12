import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PokemonDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-ies-aguadulce-2025';
}
