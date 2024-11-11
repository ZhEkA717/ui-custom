import { TestBed } from '@angular/core/testing';

import { GruLibService } from './gru-lib.service';

describe('GruLibService', () => {
  let service: GruLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GruLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
