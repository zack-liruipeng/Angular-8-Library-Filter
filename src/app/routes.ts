import { Routes } from '@angular/router';
import { LibraryComponent } from './library/library.component';

const routeConfig: Routes = [
  {
    path: '',
    component: LibraryComponent,
    title: 'Home page',
  },
];

export default routeConfig;

/*
Author: Ruipeng Li
Above function is used for define route config
*/
