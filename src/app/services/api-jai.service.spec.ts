import { TestBed } from '@angular/core/testing';

import { ApiJaiService } from './api-jai.service';

describe('ApiJaiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiJaiService = TestBed.get(ApiJaiService);
    expect(service).toBeTruthy();
  });
});
