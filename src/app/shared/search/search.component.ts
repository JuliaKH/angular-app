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

  images: Images[] = [];
  queryTitle: string;
  searchPlaceholder = 'Search...';
  ngOnInit() {
    this.getImages('popular', 1);
  }

  getImages(title, page) {
    this.searchService.getImages(title, page);
    this.searchService.queryTitle = title;
    // this.searchService.getUnsplashImages(this.queryTitle, 1).subscribe((data) => {
    //   console.log(data);
    //   this.images = data;
    // });
  }
}
