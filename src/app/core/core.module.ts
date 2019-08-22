import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchService } from './search/search.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SearchService
  ]
})
export class CoreModule { }
