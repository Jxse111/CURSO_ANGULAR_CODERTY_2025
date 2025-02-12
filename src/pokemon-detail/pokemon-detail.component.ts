import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail',
  imports: [UpperCasePipe],
  templateUrl: `./pokemon-detail.component.html`,
  styleUrl: './pokemon-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonDetailComponent {
  pokemon = 'Pikachu';
  
}
