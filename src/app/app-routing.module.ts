import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {ServersComponent} from './servers/servers.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {ServerComponent} from './servers/server/server.component';
import {UserComponent} from './users/user/user.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UsersComponent} from './users/users.component';
import {Route, Routes, RouterModule} from '@angular/router';
import {AuthGuardService} from './auth-guard.service';

const appRoutes: Route[] = [
  {path: '', component: HomeComponent},
  {
    path: 'servers', canActivateChild: [AuthGuardService], component: ServersComponent, children: [
    {path: ':id', component: ServerComponent},
    {path: ':id/edit', component: EditServerComponent}
  ]
  },
  {
    path: 'users', component: UsersComponent, children: [
    {path: ':id/:name', component: UserComponent}
  ]
  },
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {


}
