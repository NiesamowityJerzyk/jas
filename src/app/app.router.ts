import { Routes } from '@angular/router';
import { GuestComponent } from './modules/guest/guest.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'oferta',
        loadComponent: () =>
          import('./modules/guest/pages/offer/offer.component').then(
            (x) => x.OfferComponent
          ),
      },
      {
        path: 'o-nas',
        loadComponent: () =>
          import('./modules/guest/pages/about/about.component').then(
            (x) => x.AboutComponent
          ),
      },
      { path: '**', redirectTo: '/' },
    ],
  },

  { path: '**', redirectTo: '/' },
];
