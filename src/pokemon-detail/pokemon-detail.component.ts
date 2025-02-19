import { UpperCasePipe } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";

@Component({
  selector: "app-pokemon-detail",
  imports: [UpperCasePipe],
  templateUrl: `./pokemon-detail.component.html`,
  styleUrl: "./pokemon-detail.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonDetailComponent {
  @Input() pokemon: string = "";
  @Input() imagen: string = "";
  @Input() skills: string[] = [];
  @Input() types: string[] = [];
  @Output() clickName = new EventEmitter<string>();
}
