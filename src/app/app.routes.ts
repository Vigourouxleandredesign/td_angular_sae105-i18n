import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Fpv } from './pages/fpv/fpv';
import { Tennis } from './pages/tennis/tennis';
import { Aom } from './pages/aom/aom';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'fpv', component: Fpv },
  { path: 'tennis', component: Tennis },
  { path: 'age-of-mythology', component: Aom },
  { path: '**', redirectTo: '' }
];
