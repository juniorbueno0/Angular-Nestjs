import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ListPostComponent } from './components/list-post/list-post.component';

const routes: Routes = [
  {
    path:'main',
    component: MainComponent
  },
  {
    path:'create',
    component: CreatePostComponent
  },
  {
    path:'list',
    component: ListPostComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'main'
  },
  {
    path:'**',
    redirectTo:'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }