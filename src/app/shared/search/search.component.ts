import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../core/search/search.service';
import {Images} from '../images';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public searchService: SearchService) { }

  inputValue = '';
  images: Images[] = [];
  ngOnInit() {
  }

  setValue(value) {
    this.inputValue = value;
    console.log(this.inputValue);
  }

  getImages() {
    this.searchService.getUnsplashImages(this.inputValue).subscribe((data) => {
      console.log(data);
      this.images = data;
    });
  }
}
