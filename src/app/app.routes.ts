import { Routes } from "@angular/router";
import { UserRole } from "./user/user.service";
import { HomeComponent } from "./pages/home/home.component";
import { AdminComponent } from "./pages/admin/admin.component";

export interface RouteData {
  allowedRole: UserRole;
}

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: { allowedRole: UserRole.User } as RouteData,
  },
  {
    path: "admin",
    component: AdminComponent,
    data: { allowedRole: UserRole.Admin } as RouteData,
  },
];

// TODO: add route guard
