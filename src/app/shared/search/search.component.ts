import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../core/search/search.service';
import { Images } from '../images';

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
    this.getImages('popular', 1);
  }

  getImages(title, page) {
    this.searchService.getImages(title, page);
    this.searchService.queryTitle = title;
  }
}
