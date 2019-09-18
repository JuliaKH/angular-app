import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchService } from './services/search/search.service';
import {CollectionsService} from './services/collections/collections.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SearchService,
    CollectionsService
  ]
})
export class CoreModule { }
