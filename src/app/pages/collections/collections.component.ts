import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import { IAppState } from '../../core/store/state/app.state';
import { selectCollectionsLst } from '../../core/store/selectors/collections.selectors';
import {GetCollections} from '../../core/store/actions/collections.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit, OnDestroy {

  collections$ = this.store.pipe(select(selectCollectionsLst));
  collections: ReceiveCollections[];
  private collectionsSubscription: Subscription;

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.getCollections$();
  }
  ngOnDestroy() {
    this.collectionsSubscription.unsubscribe();
  }

  getCollections$() {
    this.store.dispatch(new GetCollections());
    this.collectionsSubscription = this.collections$.subscribe(collections => {
      this.collections = collections;
      console.log(this.collections);
    });
  }
}

export class ReceiveCollections {
  id: string;
  title: string;
  description: string;
}
