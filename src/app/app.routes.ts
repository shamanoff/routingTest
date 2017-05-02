import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {ServersComponent} from "./servers/servers.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {NotFoundComponent} from "./not-found/not-found.component";

export const appRoutes: Routes = [
  {path: '', component: HomeComponent, },
  {
    path: 'users', component: UsersComponent, children: [
    {path: ':id', component: UserDetailsComponent}
  ]
  },
  {path: 'servers', component: ServersComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];
