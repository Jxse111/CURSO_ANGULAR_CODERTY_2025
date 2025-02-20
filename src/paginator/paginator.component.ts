import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from "@angular/core";

@Component({
  selector: "app-paginator",
  imports: [],
  templateUrl: "./paginator.component.html",
  styleUrl: "./paginator.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent {
  @Output() nextPage = new EventEmitter<void>();
  @Output() prevPage = new EventEmitter<void>();
}
