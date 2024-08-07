import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { UserRole, UserService } from './user/user.service';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { inject } from '@angular/core';

export interface RouteData {
  allowedRole: UserRole;
}

// TODO: add route guard

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    data: { allowedRole: UserRole.Admin } as RouteData,
  },
];
