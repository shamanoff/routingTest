import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {ServersComponent} from './servers/servers.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {UsersService} from './users/users.service';
import {UserComponent} from './user/user.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {appRoutes} from "./app.routes";

/*const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'users', component: UsersComponent, children: [
    {path: ':id', component: UserDetailsComponent}
  ]
  },
  {path: 'servers', component: ServersComponent},
];*/

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ServersComponent,
    HomeComponent,
    UserComponent,
    UserDetailsComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
