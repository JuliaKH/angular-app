import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ImageItemComponent } from './image-item/image-item.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    HomeComponent,
    ImageItemComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule
  ]
})
export class PagesModule { }
