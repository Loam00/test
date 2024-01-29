import { TestBed } from '@angular/core/testing';

import { PippoService } from './pippo.service';

describe('PippoService', () => {
  let service: PippoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PippoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
