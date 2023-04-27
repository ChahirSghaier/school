import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { SideBarComponentComponent } from './side-bar-component/side-bar-component.component';
import { AppRoutingModule } from './app-routing.module';
import { RoomComponent } from './room/room.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReclamationComponent} from './reclamation/reclamation.component';
import { AddReclamationComponent } from './reclamation/add-reclamation/add-reclamation.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    NavBarComponentComponent,
    SideBarComponentComponent,

    RoomComponent,
    DashboardComponent,
    ReclamationComponent,
    AddReclamationComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
