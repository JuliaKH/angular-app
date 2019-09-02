import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './search/search.component';
import { ImgListComponent } from '../pages/img-list/img-list.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';


@NgModule({
  declarations: [
    SearchComponent,
    ImgListComponent
  ],
  exports: [
    ImgListComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ]
})
export class SharedModule { }
