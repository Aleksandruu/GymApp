import { Routes } from '@angular/router';
import { AddDetailsComponent } from './pages/add-details/add-details.component';
import { PATHS } from './constants/routes';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: PATHS.ADD_DETAILS },
  { component: AddDetailsComponent, path: PATHS.ADD_DETAILS },
];
