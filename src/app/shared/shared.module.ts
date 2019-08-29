import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './search/search.component';
import { ImgListComponent } from '../pages/img-list/img-list.component';
import {FormsModule} from '@angular/forms';


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
  ]
})
export class SharedModule { }
