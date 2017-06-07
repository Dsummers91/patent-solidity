import { TestBed, inject } from '@angular/core/testing';

import { PatentService } from './patent.service';

describe('PatentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatentService]
    });
  });

  it('should be created', inject([PatentService], (service: PatentService) => {
    expect(service).toBeTruthy();
  }));
});
