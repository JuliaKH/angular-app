import {Component, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { SearchService } from '../../core/search/search.service';
import { Subscription } from 'rxjs';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.scss']
})

export class ImgListComponent implements OnInit, OnDestroy {
  constructor(public searchService: SearchService) {
  }

  images: ReceiveImages[] = [];
  private addImgsSubscription: Subscription;
  private scrollSubscription: Subscription;

  page = 1;
  ngOnInit() {
    // this.searchService.getImages(this.searchService.queryTitle);
    this.getImages();
    // this.getNewImages();
    // window.addEventListener('scroll', this.scroll, true);
  }
  ngOnDestroy() {
    this.addImgsSubscription.unsubscribe();
    this.scrollSubscription.unsubscribe();
    window.removeEventListener('scroll', this.scroll, true);
  }
  getImages() {
    this.addImgsSubscription = this.searchService.newImages.subscribe(images => {
        this.images = images;
        console.log(this.images);
    });
  }
  getNewImages() {
    this.scrollSubscription = this.searchService.currentImages.subscribe(images => {
        images.map(image => {
          this.images.push(image);
        });

    });
  }
  // @HostListener('window:scroll', ['$event'])
  scroll = (): void => {
    if ((window.innerHeight + window.scrollY) + 1 >= document.body.offsetHeight) {
      this.page++;
      console.log(this.page);
      this.searchService.getAddedImages(this.searchService.queryTitle, this.page);
    }
  }

}

export class ReceiveImages {
  id: string;
  description: string;
  urls: {
    regular: string;
  };
}
