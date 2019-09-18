import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsComponent } from './collections.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CollectionsComponent}
];

@NgModule({
  declarations: [CollectionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CollectionsModule { }
