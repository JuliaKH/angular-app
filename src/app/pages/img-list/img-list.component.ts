import {Component, OnDestroy, OnInit} from '@angular/core';
import { SearchService } from '../../core/services/search/search.service';
import {Observable, Subscription} from 'rxjs';
import { GetImages } from '../../core/store/actions/images.actions';
import { Store, select} from '@ngrx/store';
import {IAppState} from '../../core/store/state/app.state';
import {selectImagesLst} from '../../core/store/selectors/images.selector';
import {IImages} from '../../core/services/search/images';
import {Select} from '@ngxs/store';
import {LoaderState} from '../../core/store/state/loader.state';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.scss']
})

export class ImgListComponent implements OnInit, OnDestroy {
  images$ = this.store.pipe(select(selectImagesLst));

  constructor(public searchService: SearchService, private store: Store<IAppState>) {}
  @Select(LoaderState.status)
  public loadingStatus$: Observable<boolean>;
  // images: ReceiveImages[] = [];
  images: IImages[] = [];
  private addImgsSubscription: Subscription;
  private scrollSubscription: Subscription;

  page = 1;

  ngOnInit() {
    this.searchService.getImages(this.searchService.queryTitle);
    // this.getImages();
    // this.appendItems();
    // this.appendItems$();
    this.getImages$();
  }

  ngOnDestroy() {
    this.addImgsSubscription.unsubscribe();
    // this.scrollSubscription.unsubscribe();
  }

  getImages$() {
    this.store.dispatch(new GetImages());
    this.addImgsSubscription = this.images$.subscribe(images => {
      this.images = images;
      console.log('hello+');
      console.log(this.images);
    });


  }

  // getImages() {
  //   this.addImgsSubscription = this.searchService.newImages.subscribe(images => {
  //     this.images = images;
  //     console.log(this.images);
  //   });
  // }

  appendItems() {
    this.page++;
    console.log(this.page);

    this.scrollSubscription = this.searchService.currentImages.subscribe(images => {
      images.map(image => {
        this.images.push(image);
      });
    });
  }

  // appendItems$() {
  //   this.page++;
  //   console.log(this.page);
  //   this.store.dispatch(new GetImages());
  //   this.images$.subscribe(images => {
  //     images.map(image => {
  //       this.images1.push(image);
  //     });
  //     console.log('hello++');
  //     console.log(this.images1);
  //   });
  // }

  onScrollDown() {
    this.page++;
    console.log(this.page);
    this.searchService.getAddedImages(this.searchService.queryTitle, this.page);
    // }
    // onScrollDown() {
    //   this.page++;
    //   console.log(this.page);
    //   this.searchService.getAddedImages(this.searchService.queryTitle, this.page);
    // }

  }
}
export class ReceiveImages {
  id: string;
  description: string;
  urls: {
    regular: string;
  };
}
