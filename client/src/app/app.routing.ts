import { Routes } from "@angular/router";
import { PatentListComponent } from "./patent-list/patent-list.component";

export const appRoutes: Routes = [
  {
    path: '',
    component: PatentListComponent
  },
  {
    path: '**',
    component: PatentListComponent
  }
];
