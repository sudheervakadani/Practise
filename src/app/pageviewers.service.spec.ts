import { TestBed } from '@angular/core/testing';

import { PageviewersService } from './pageviewers.service';

describe('PageviewersService', () => {
  let service: PageviewersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageviewersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
