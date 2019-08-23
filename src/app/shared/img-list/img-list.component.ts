import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchService} from '../../core/search/search.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.scss']
})

export class ImgListComponent implements OnInit, OnDestroy {

  constructor(public searchService: SearchService) { }

images: ReceiveImages[] = [];
private subscription: Subscription;

  ngOnInit() {
    this.getImages();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  getImages() {
    this.subscription = this.searchService.currentImages.subscribe(images => {
      this.images = images;
      console.log(this.images);
    });
  }
}

export class ReceiveImages {
  id: string;
  description: string;
  urls: {
    regular: string;
  };
}
