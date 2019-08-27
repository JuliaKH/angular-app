import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import { SearchService } from '../../core/search/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.scss']
})

export class ImgListComponent implements OnInit, OnDestroy {

  constructor(public searchService: SearchService) {}

  // @ts-ignore
  images: ReceiveImages[] = [];
  private subscription: Subscription;

  page = 1;
  ngOnInit() {
    this.getImages();
    window.addEventListener('scroll', this.scroll, true);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    window.removeEventListener('scroll', this.scroll, true);
  }
  pushImage<T>(image: T) {
    this.images.push(image);
  }
  getImages() {
    this.subscription = this.searchService.currentImages.subscribe(images => {
      // this.images = images;
      images.map(image => {
        this.pushImage(image);
      });
      console.log(this.images);
    });
  }
  @HostListener('window:scroll', ['$event'])
  scroll = (): void => {
    if ((window.innerHeight + window.scrollY) + 1 >= document.body.offsetHeight) {
      this.page++;
      console.log(this.page);
      this.searchService.getImages(this.searchService.queryTitle, this.page);
    }
  }

}

export class ReceiveImages<T> {
  id: string;
  description: string;
  urls: {
    regular: string;
  };
}
