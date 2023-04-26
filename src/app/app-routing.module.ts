import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import {RoomComponent} from './room/room.component';

const routes: Routes = [
  {path: 'home', component: HomeComponentComponent},
  {path: 'room', component: RoomComponent},
  {path: 'dashboard', component: DashboardComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{


}
