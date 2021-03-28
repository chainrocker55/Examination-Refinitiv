import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Quiz02Component } from './quiz02/quiz02.component';
import { Quiz01Component } from './quiz01/quiz01.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'quiz01', component: Quiz01Component},
  {path: 'quiz02', component: Quiz02Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
