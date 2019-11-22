import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListPage } from './user-list.page';

const routes: Routes = [
  {
    path: '',
    component: UserListPage
  },
  {
    path: ':userId',
    loadChildren: () => import('./user-details/user-details.module').then( m => m.UserDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserListPageRoutingModule {}
