import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { SideBarComponentComponent } from './side-bar-component/side-bar-component.component';
import { AppRoutingModule } from './app-routing.module';
import { RoomComponent } from './room/room.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    NavBarComponentComponent,
    SideBarComponentComponent,
    RoomComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
