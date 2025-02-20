import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "pokemon-list",
  },
  {
    path: "pokemon-list",
    loadComponent: () =>
      import("../pokemon-list/pokemon-list.component").then(
        (c) => c.PokemonListComponent
      ),
  },
  {
    path: "**",
    loadComponent: () =>
      import("../not-found/not-found.component").then(
        (c) => c.NotFoundComponent
      ),
  },
];
