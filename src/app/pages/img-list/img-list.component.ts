import {Component, OnDestroy, OnInit} from '@angular/core';
import { SearchService } from '../../core/search/search.service';
import { Subscription } from 'rxjs';
import { GetImages } from '../../core/store/actions/images.actions';
import { Store, select} from '@ngrx/store';
import {IAppState} from '../../core/store/state/app.state';
import {Router} from '@angular/router';
import {selectImagesLst} from '../../core/store/selectors/images.selector';
import {IImages} from '../../core/search/images';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.scss']
})

export class ImgListComponent implements OnInit, OnDestroy {
  images$ = this.store.pipe(select(selectImagesLst));
  constructor(public searchService: SearchService, private store: Store<IAppState>, private router: Router) {
  }

  images: ReceiveImages[] = [];
  images1: IImages[] = [];
  private addImgsSubscription: Subscription;
  private scrollSubscription: Subscription;

  page = 1;
  ngOnInit() {
    // this.searchService.getImages(this.searchService.queryTitle);
    // this.getImages();
    // this.appendItems();
    this.store.dispatch(new GetImages());
    console.log(this.images$);
    this.getImages$();
    // this.getNewImages();
  }
  ngOnDestroy() {
    this.addImgsSubscription.unsubscribe();
    this.scrollSubscription.unsubscribe();
  }
  getImages$() {
    this.images$.subscribe(images => {
      this.images1 = images;
      console.log('hello!!!');
      console.log(this.images1);
    });

  }
  getImages() {
    this.addImgsSubscription = this.searchService.newImages.subscribe(images => {
        this.images = images;
        console.log(this.images);
    });
  }

  appendItems() {
    this.page++;
    console.log(this.page);

    this.scrollSubscription = this.searchService.currentImages.subscribe(images => {
      images.map(image => {
        this.images.push(image);
      });
    });
  }
  onScrollDown() {
    this.page++;
    console.log(this.page);
    this.searchService.getAddedImages(this.searchService.queryTitle, this.page);
  }

}

export class ReceiveImages {
  id: string;
  description: string;
  urls: {
    regular: string;
  };
}
