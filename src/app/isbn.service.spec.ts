import { TestBed } from '@angular/core/testing';

import { ISBNService } from './isbn.service';

describe('ISBNService', () => {
  let service: ISBNService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ISBNService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
