import { Component, OnInit } from '@angular/core';
import {GetImageItemService } from '../../core/services/get-image-item/get-image-item.service';
import {ActivatedRoute} from '@angular/router';
import { Image } from './image';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss']
})
export class ImageItemComponent {

  image$: Observable<Image> = this.imageService.getImageItem(
    this.activateRoute.snapshot.params.id
  )

  constructor(
    public imageService: GetImageItemService,
    private activateRoute: ActivatedRoute,
  ) { }
}
