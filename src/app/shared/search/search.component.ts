import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../core/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public search: SearchService) { }

  inputValue = '';
  ngOnInit() {
  }

  setValue(value) {
    this.inputValue = value;
    console.log(this.inputValue);
  }

  getImages() {
    this.search.getUnsplashImages(this.inputValue);
  }
}
