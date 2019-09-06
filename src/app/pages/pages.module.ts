import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ImgListComponent } from './img-list/img-list.component';
import { ImageItemComponent } from './image-item/image-item.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    ImgListComponent,
    ImageItemComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    RouterModule
  ]
})
export class PagesModule { }
