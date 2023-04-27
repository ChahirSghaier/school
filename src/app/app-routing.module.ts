import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import {RoomComponent} from './room/room.component';
import {ReclamationComponent} from './reclamation/reclamation.component';
import {AddReclamationComponent} from './reclamation/add-reclamation/add-reclamation.component';


const routes: Routes = [
  {path: 'home', component: HomeComponentComponent},
  {path: 'room', component: RoomComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'reclamation', component: ReclamationComponent },
  {path: 'newR' , component: AddReclamationComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{


}
