import { TestBed } from '@angular/core/testing';

import { PhonesBookService } from './phones-book.service';

describe('PhonesBookService', () => {
  let service: PhonesBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhonesBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
