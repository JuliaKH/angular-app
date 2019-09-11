import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ImgListComponent} from './img-list.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';


const routes: Routes = [
  { path: '', component: ImgListComponent}
];

@NgModule({
  declarations: [
    ImgListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InfiniteScrollModule
  ]
})
export class ImgListModule { }
