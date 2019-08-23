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
    this.searchService.getUnsplashImages('popular').subscribe((data) => {
      this.images = data;
    });
  }

  getImages() {
    this.searchService.getUnsplashImages(this.queryTitle).subscribe((data) => {
      console.log(data);
      this.images = data;
    });
  }
}
