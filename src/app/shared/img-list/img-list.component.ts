import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from '../../core/search/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.scss']
})

export class ImgListComponent implements OnInit, OnDestroy {

  constructor(public searchService: SearchService) { }

images: ReceiveImages[] = [];
private subscription: Subscription;

  page = 1;
  ngOnInit() {
    this.getImages();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  getImages() {
    this.subscription = this.searchService.currentImages.subscribe(images => {
      this.images = images;
      // this.images.push(images);
      console.log(this.images);
      console.log(this.searchService.queryTitle);
    });
  }
  // When scroll down the screen
  onScroll() {
    console.log('Scrolled');
    this.page += this.page;
    this.searchService.getImages(this.searchService.queryTitle, this.page);
  }
}

export class ReceiveImages {
  id: string;
  description: string;
  urls: {
    regular: string;
  };
}
