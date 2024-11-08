import { Routes } from '@angular/router';
import { AddDetailsComponent } from './pages/add-details/add-details.component';
import { PATHS } from './constants/routes';

export const routes: Routes = [
  { component: AddDetailsComponent, path: PATHS.ADD_DETAILS },
];
