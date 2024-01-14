import { Routes } from '@angular/router';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  {
    title: 'Statistics',
    component: StatisticsPageComponent,
    path: 'statistics',
  },
  {
    title: 'Welcome',
    component: HomePageComponent,
    path: '',
  },
];
