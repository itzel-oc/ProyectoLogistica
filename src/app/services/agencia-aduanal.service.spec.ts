import { TestBed } from '@angular/core/testing';

import { AgenciaAduanalService } from './agencia-aduanal.service';

describe('AgenciaAduanalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgenciaAduanalService = TestBed.get(AgenciaAduanalService);
    expect(service).toBeTruthy();
  });
});
