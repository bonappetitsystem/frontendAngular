import { TestBed } from '@angular/core/testing';

import { AuthguardGerenteService } from './authguard-gerente.service';

describe('AuthguardGerenteService', () => {
  let service: AuthguardGerenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthguardGerenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
