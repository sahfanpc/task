import { TestBed } from '@angular/core/testing';

import { DatabaceService } from './databace.service';

describe('DatabaceService', () => {
  let service: DatabaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
