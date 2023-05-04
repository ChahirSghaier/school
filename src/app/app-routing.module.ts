import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import {CommentsComponent} from './comments/comments.component';

const routes: Routes = [
  {path: 'home', component: HomeComponentComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'dashboard', component: DashboardComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{


}
