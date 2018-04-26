import { TestBed, inject } from '@angular/core/testing';

import { LightningService } from './lightning.service';

describe('LightningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LightningService]
    });
  });

  it('should be created', inject([LightningService], (service: LightningService) => {
    expect(service).toBeTruthy();
  }));
});
