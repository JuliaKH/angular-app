import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../core/services/search/search.service';
import { Store } from '@ngrx/store';
import { IAppState } from '../../core/store/state/app.state';
import { GetImages } from '../../core/store/actions/images.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public searchService: SearchService, private store: Store<IAppState>) { }
  queryTitle: string;
  searchPlaceholder = 'Search...';
  ngOnInit() {
  }

  getImages(title) {
    this.searchService.queryTitle = title;
    this.store.dispatch(new GetImages());
  }
}
