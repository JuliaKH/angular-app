import { TestBed } from '@angular/core/testing';

import { GetImageItemService } from './get-image-item.service';

describe('GetImageItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetImageItemService = TestBed.get(GetImageItemService);
    expect(service).toBeTruthy();
  });
});
