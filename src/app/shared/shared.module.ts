import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ImgListComponent } from './img-list/img-list.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    ImgListComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
