import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularRoutingListComponent } from './angular-routing-list/angular-routing-list.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './angular-routing-list/pages/home/home.component';
import { WorksComponent } from './angular-routing-list/pages/works/works.component';
import { CenzorComponent } from './angular-routing-list/pages/cenzor/cenzor.component';
import { UsersComponent } from './angular-routing-list/pages/users/users.component';
import { TaskComponent } from './angular-routing-list/pages/task/task.component';
import { TableComponent } from './angular-routing-list/pages/task/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularRoutingListComponent,
    HeaderComponent,
    HomeComponent,
    WorksComponent,
    CenzorComponent,
    UsersComponent,
    TaskComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
