import { Component, OnDestroy, OnInit } from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import { LoaderState } from '../core/services/loader/loader.service';
import { LoaderService } from '../core/services/loader/loader.service';
import {shareReplay, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  private destroy$ = new Subject();

  show$ = this.loaderService.loaderState
    .pipe(
      shareReplay({ bufferSize: 1, refCount: true }),
      takeUntil(this.destroy$.asObservable())
    )

  constructor(private loaderService: LoaderService) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
