import { TestBed } from '@angular/core/testing';

import { DatosBancariosService } from './datos-bancarios.service';

describe('DatosBancariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosBancariosService = TestBed.get(DatosBancariosService);
    expect(service).toBeTruthy();
  });
});
