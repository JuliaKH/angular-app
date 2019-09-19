import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from '../../core/services/search/search.service';
import { Subscription } from 'rxjs';
import {AddImages, GetImages} from '../../core/store/actions/images.actions';
import { Store, select} from '@ngrx/store';
import { IAppState } from '../../core/store/state/app.state';
import { selectAddedImagesLst, selectImagesLst } from '../../core/store/selectors/images.selector';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.scss']
})

export class ImgListComponent implements OnInit, OnDestroy {

  images$ = this.store.pipe(select(selectImagesLst));
  addedImages$ = this.store.pipe(select(selectAddedImagesLst));

  constructor(public searchService: SearchService, private store: Store<IAppState>) {}

  images: ReceiveImages[] = [];
  page;
  private addImgsSubscription: Subscription;
  private scrollSubscription: Subscription;

  ngOnInit() {
    // this.searchService.getImages(this.searchService.queryTitle);
    this.getImages$();
    this.appendItems$();
  }

  ngOnDestroy() {
    this.addImgsSubscription.unsubscribe();
    this.scrollSubscription.unsubscribe();
  }

  getImages$() {
    this.page = 1;
    this.store.dispatch(new GetImages());
    this.addImgsSubscription = this.images$.subscribe(images => {
      this.images = images;
    });
  }

  appendItems$() {
    console.log(this.page);
    this.scrollSubscription = this.addedImages$.subscribe(images => {
      if (images) {
        images.map(image => {
          this.images.push(image);
        });
      }
      console.log(this.images);
    });
  }

  onScrollDown() {
    this.page++;
    console.log(this.page);
    this.searchService.page = this.page;
    this.store.dispatch(new AddImages());

  }
}

export class ReceiveImages {
  id: string;
  description: string;
  url: string;
}
