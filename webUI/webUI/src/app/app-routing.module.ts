import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddMeoComponent } from './add-meo/add-meo.component';
import { ListMeoComponent } from './list-meo/list-meo.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'add-meo', component: AddMeoComponent},
  {path: 'list-meo', component: ListMeoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
