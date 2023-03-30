import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './angular-routing-list/pages/home/home.component';
import { WorksComponent } from './angular-routing-list/pages/works/works.component';
import { CenzorComponent } from './angular-routing-list/pages/cenzor/cenzor.component';
import { UsersComponent } from './angular-routing-list/pages/users/users.component';
import { TaskComponent } from './angular-routing-list/pages/task/task.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'works', component: WorksComponent, children: [
    { path: 'cenzor', component: CenzorComponent },
    { path: 'userlist', component: UsersComponent },
    { path: 'tasklist', component: TaskComponent },
    { path: '', pathMatch: 'full', redirectTo: 'cenzor' }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
