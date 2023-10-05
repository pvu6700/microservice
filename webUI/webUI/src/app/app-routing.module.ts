import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddMeoComponent } from './add-meo/add-meo.component';
import { ListMeoComponent } from './list-meo/list-meo.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'addmeos', component: AddMeoComponent},
  {path: 'meos', component: ListMeoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
