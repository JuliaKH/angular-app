import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../core/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public searchService: SearchService) { }
  queryTitle: string;
  searchPlaceholder = 'Search...';
  ngOnInit() {
    this.getImages('popular');
  }

  getImages(title) {
    this.searchService.getImages(title);
    this.searchService.queryTitle = title;
  }
}
