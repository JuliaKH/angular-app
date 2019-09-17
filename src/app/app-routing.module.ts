import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImageItemComponent} from './pages/image-item/image-item.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {HomeComponent} from './pages/home/home.component';
import {LoaderComponent} from './loader/loader.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'images', loadChildren: './pages/img-list/img-list.module#ImgListModule', pathMatch: 'full'},
  { path: 'images/:id', component: ImageItemComponent},
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] ,
})
export class AppRoutingModule { }
