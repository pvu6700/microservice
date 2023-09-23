import { TestBed } from '@angular/core/testing';

import { MeosService } from './meos.service';

describe('MeosService', () => {
  let service: MeosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
