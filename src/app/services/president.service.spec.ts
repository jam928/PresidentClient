import { TestBed, inject } from '@angular/core/testing';

import { PresidentService } from './president.service';

describe('PresidentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PresidentService]
    });
  });

  it('should be created', inject([PresidentService], (service: PresidentService) => {
    expect(service).toBeTruthy();
  }));
});
