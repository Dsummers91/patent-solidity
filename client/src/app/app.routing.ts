import { Routes } from "@angular/router";
import { PatentListComponent } from "./patent-list/patent-list.component";
import { PatentComponent } from "./patent/patent.component";

export const appRoutes: Routes = [
  {
    path: '',
    component: PatentListComponent
  },
  {
    path: ':id',
    component: PatentComponent
  }
];
