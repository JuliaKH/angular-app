import { Component, OnInit } from '@angular/core';
import {GetImageItemService } from '../../core/get-image-item/get-image-item.service';
import {ActivatedRoute} from '@angular/router';
import { Image } from './image';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss']
})
export class ImageItemComponent implements OnInit {

  constructor(public imageService: GetImageItemService, private activateRoute: ActivatedRoute ) { }

  image: Image = {
    id: '',
    alt_description: '',
    url: ''
  };
  ngOnInit() {
    this.getImage(this.activateRoute.snapshot.params.id);
  }

  getImage(id) {
    this.imageService.getImageItem(id).subscribe(image => {
      this.image = image;
    });
  }
}
