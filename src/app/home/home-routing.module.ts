import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'homepage',
        children: [
          {
            path: '',
            loadChildren: () => import('../user-list/user-list.module').then( m => m.UserListPageModule)
          },
          {
            path: ':userId',
            loadChildren: () => import('../user-list/user-details/user-details.module').then( m => m.UserDetailsPageModule)
          }
        ]
      },
      {
        path: 'discover',
        children: [
          {path: '', loadChildren: () => import('../pages/discover/discover.module').then( m => m.DiscoverPageModule) }
        ]
      },
      {
        path: 'offers',
        children: [
          {path: '', loadChildren: () => import('../pages/offer/offer.module').then( m => m.OfferPageModule) }
        ]
      },
      {
        path: '',
        redirectTo: '/home/tabs/homepage',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/tabs/homepage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
