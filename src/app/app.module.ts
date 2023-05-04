import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { SideBarComponentComponent } from './side-bar-component/side-bar-component.component';
import { AppRoutingModule } from './app-routing.module';
import { CommentsComponent } from './comments/comments.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule ({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    NavBarComponentComponent,
    SideBarComponentComponent,
    CommentsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
