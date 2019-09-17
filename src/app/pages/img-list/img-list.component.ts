import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from '../../core/services/search/search.service';
import { Subscription } from 'rxjs';
import { GetImages } from '../../core/store/actions/images.actions';
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
  private addImgsSubscription: Subscription;
  private scrollSubscription: Subscription;

  page;

  ngOnInit() {
    this.page = 1;
    this.searchService.getImages(this.searchService.queryTitle);
    this.getImages$();
    this.appendItems$();
  }

  ngOnDestroy() {
    this.addImgsSubscription.unsubscribe();
    this.scrollSubscription.unsubscribe();
  }

  getImages$() {
    this.store.dispatch(new GetImages());
    this.addImgsSubscription = this.images$.subscribe(images => {
      this.images = images;
      console.log(this.images);
    });
  }

  appendItems$() {
    // this.page++;
    console.log(this.page);
    this.scrollSubscription = this.addedImages$.subscribe(images => {
      if (images) {
        images.map(image => {
          this.images.push(image);
        });
      }

      console.log('hello--');
      console.log(this.images);
    });
  }

  onScrollDown() {
    this.page++;
    console.log(this.page);
    this.searchService.page = this.page;
    this.searchService.getAddedImages(this.searchService.queryTitle, this.page);
  }
}
export class ReceiveImages {
  id: string;
  description: string;
  url: string;
}
